import {
  Uma,
  UmaState,
  RaceParams,
  JsonData,
  StrNumDict,
  FunctionsGroup,
  StrDict,
  RaceFunctions,
} from '../types';

import { mergeObjects } from './Common';

import Constants from '../constants/Constants';
import Coefs from '../constants/Coefs';
import CourseData from '../constants/CourseData.json';

const courseData: JsonData = CourseData;
const constants: JsonData = Constants;
const coefs: JsonData = Coefs;

const { framesPerSec, frameLength, statusType } = constants;

const setSpCost = (uma: UmaState, raceParams: RaceParams): void => {
  const { momentSpeed, costState, params } = uma;
  const { spCostCoef } = params;
  // const spCostCoef = params.spCostCoef[costState];
  const { surfaceCoef, baseV } = raceParams;
  const spVCoef = (momentSpeed - baseV + 12.0) ** 2 / 144;
  uma.spCost = (
    20 *
    spCostCoef[costState] *
    spVCoef *
    surfaceCoef.sp *
    frameLength
  ).round();
};

const calSpCost = (uma: UmaState, raceParams: RaceParams): number => {
  const { momentSpeed, costState, params } = uma;
  const { spCostCoef } = params;
  // const spCostCoef = params.spCostCoef[costState];
  const { surfaceCoef, baseV } = raceParams;
  const spVCoef = (momentSpeed - baseV + 12.0) ** 2 / 144;
  return (
    20 *
    spCostCoef[costState] *
    spVCoef *
    surfaceCoef.sp *
    frameLength
  ).round();
};

const setSlopeEffect = (pos: number, raceParams: RaceParams): StrDict => {
  const { dist, slopes } = raceParams;

  // Linear interpolation
  const t = (1000 * pos) / dist;
  const i = Math.floor(t);
  const slopeValue: number =
    (slopes[i] + (slopes[i + 1] - slopes[i]) * (t - i)) * 100.0;

  let slopeType = 'normal';
  let slopeEffect = 0;
  if (slopeValue >= 1) {
    slopeType = 'ascent';
    slopeEffect = slopeValue * -200;
  } else if (slopeValue <= -1) {
    slopeType = 'descent';
  }

  return {
    slopeType,
    slopeEffect,
  };
};

const setPos = (uma: UmaState, raceParams: RaceParams): void => {
  const { pos } = uma;
  const { phaseLine, sectionDist, dist, slopes } = raceParams;
  const phase = phaseLine.findIndex((value: number) => pos >= value) + 1;
  const section = Math.floor(pos / sectionDist) + 1;
  const posKeeping = section <= 10;

  const { slopeType, slopeEffect } = setSlopeEffect(pos, raceParams);

  mergeObjects(uma, { phase, section, slopeType, slopeEffect, posKeeping });
};

const checkSpurt = (uma: UmaState, raceParams: RaceParams): boolean => {
  const { v, spCostCoef } = uma.params;
  const { unusedSp, pos } = uma;
  const spurtingTime: number = (raceParams.dist - pos - 60) / v.spurting;
  const spNeeded: number =
    calSpCost(uma, raceParams) * spurtingTime * framesPerSec;
  return unusedSp >= spNeeded;
};

const setMoveState = (uma: UmaState, raceParams: RaceParams): void => {
  let newMoveState: string;
  const { momentSpeed, moveState, unusedSp, params, phase, section } = uma;
  const { v } = params;

  if (unusedSp <= 0) {
    newMoveState = 'tiring';
  } else {
    switch (moveState) {
      case 'startdash':
        newMoveState =
          momentSpeed >= v.startdash ? `phase${String(phase)}` : 'startdash';
        break;
      case 'spurting':
        newMoveState = 'spurting';
        break;
      default:
        newMoveState =
          section > 16 && checkSpurt(uma, raceParams)
            ? 'spurting'
            : `phase${String(phase)}`;
        break;
    }
  }
  uma.moveState = newMoveState;
};

const checkTemptStart = (uma: UmaState, raceParams: RaceParams): boolean => {
  if (
    uma.section > 10 ||
    uma.section !== uma.params.temptSection ||
    uma.temptCond.ifTempt
  ) {
    return false;
  }

  mergeObjects(uma, {
    temptCond: {
      ...uma.temptCond,
      temptLast: 3 * framesPerSec,
      temptCount: 1,
      ifTempt: true,
    },
  });
  return true;
};

const checkTemptEnd = (uma: UmaState, raceParams: RaceParams): boolean => {
  uma.temptCond.temptCount += 1;

  const { temptCond, costState } = uma;
  const { temptCount, temptLast, ifTempt } = temptCond;

  if (
    temptCount >= 12 * framesPerSec ||
    (temptCount >= temptLast && Math.random() * 100 < 55)
  ) {
    return true;
  }

  const newTemptCond = {
    ...temptCond,
    temptLast: temptLast + 3 * framesPerSec,
  };

  mergeObjects(uma, newTemptCond);
  return false;
};

const setCostState = (uma: UmaState, raceParams: RaceParams): void => {
  const { costState, section, temptCond, params } = uma;

  let newCostState: string;

  if (costState === 'tempt') {
    if (checkTemptEnd(uma, raceParams)) {
      newCostState = 'normal';
    }
  }

  switch (costState) {
    case 'normal':
      if (checkTemptStart(uma, raceParams)) {
        newCostState = 'tempt';
      } else {
        newCostState = uma.moveState === 'spurting' ? 'spurting' : 'normal';
      }
      break;
    // case 'spurting':
    // break;
    // case 'slacking':
    // unknown right now
    // break;
    // case 'descentMode':
    /// //////////////////
    // todo
    // break;
    default:
      newCostState = uma.costState;
      break;
  }
  uma.costState = newCostState;
};

const setPosKeepEffect = () => 1;

const setTargetSpeed = (uma: UmaState, raceParams: RaceParams): void => {
  const { params, momentSpeed, moveState, slopeType, slopeEffect } = uma;
  const { v } = params;

  const posKeepEffect = setPosKeepEffect();
  const baseTargetV = v[moveState];
  const skillEffect = 0;

  const targetSpeed = (
    baseTargetV * posKeepEffect +
    slopeEffect +
    skillEffect
  ).round();
  const speedDiff = (momentSpeed - targetSpeed).round();

  mergeObjects(uma, { targetSpeed, speedDiff });
};

const setMomentAcc = (uma: UmaState, raceParams: RaceParams): void => {
  const {
    phase,
    params,
    moveState,
    momentSpeed,
    unusedSp,
    targetSpeed,
    speedDiff,
    slopeType,
  } = uma;
  const { a } = params;
  let momentAcc = 0;
  if (speedDiff !== 0) {
    if (unusedSp <= 0) {
      momentAcc = a.dec.tiring;
    } else {
      console.log(speedDiff);
      console.log(slopeType);
      console.log(`phase${String(phase)}`);
      momentAcc =
        speedDiff > 0
          ? a.acc[slopeType][`phase${String(phase)}`]
          : a.dec[`phase${String(phase)}`];

      if (moveState === 'startdash') {
        momentAcc += 24.0;
      }
    }
  }
  uma.momentAcc = momentAcc.round();
};

const setNextUnusedSp = (uma: UmaState, raceParams: RaceParams): void => {
  uma.nextUnusedSp = uma.unusedSp - uma.spCost;
};

const setNextSpeed = (uma: UmaState, raceParams: RaceParams): void => {
  const {
    params,
    moveState,
    momentSpeed,
    unusedSp,
    momentAcc,
    targetSpeed,
    speedDiff,
    slopeType,
  } = uma;
  let nextSpeed: number = momentSpeed + momentAcc * frameLength;
  if ((nextSpeed - momentSpeed) * (nextSpeed - targetSpeed) > 0) {
    nextSpeed = targetSpeed;
  }
  uma.nextSpeed = nextSpeed.round();
};

const setNextPos = (uma: UmaState, raceParams: RaceParams): void => {
  const { nextSpeed, momentSpeed, pos } = uma;
  const avgSpeed = ((nextSpeed + momentSpeed) / 2).round();
  let nextPos = pos + avgSpeed * frameLength;
  nextPos = nextPos <= raceParams.dist ? nextPos : raceParams.dist;
  mergeObjects(uma, {
    nextPos,
    avgSpeed,
  });
};

export const setRaceFunctions = (raceParams: RaceParams): RaceFunctions => {
  const momentStateFunctions = {
    setPos: (uma: UmaState) => setPos(uma, raceParams),
    setMoveState: (uma: UmaState) => setMoveState(uma, raceParams),
    setCostState: (uma: UmaState) => setCostState(uma, raceParams),
    setSpCost: (uma: UmaState) => setSpCost(uma, raceParams),
    setTargetSpeed: (uma: UmaState) => setTargetSpeed(uma, raceParams),
    setMomentAcc: (uma: UmaState) => setMomentAcc(uma, raceParams),
  };

  const nextStateFunctions = {
    setNextSpeed: (uma: UmaState) => setNextSpeed(uma, raceParams),
    setNextUnusedSp: (uma: UmaState) => setNextUnusedSp(uma, raceParams),
    setNextPos: (uma: UmaState) => setNextPos(uma, raceParams),
  };
  return {
    momentStateFunctions,
    nextStateFunctions,
  };
};

export default setRaceFunctions;

// const setPosKeepEffect = (objParams) => {
//   const { preUma, momentUma, umaParams, raceParams, umasOrder } = objParams;
//   const { moveState } = momentUma;
//   const { posKeepRate } = umaParams;
//   const { sectionDist } = raceParams;
//   const { posKeepMode, posKeepStart, posKeepCD } = momentUma.otherCond;

//   switch (umaParams.usingStyle) {
//     case '1':
//       switch (posKeepMode) {
//         case 'normal':
//           // check speedUp mode
//           if (
//             umasOrder[1].index === umaParams.index &&
//             preUma.pos - umasOrder[2].pos < 4.5
//           ) {
//             if (posKeepCD !== 0) {
//               momentUma.otherCond.posKeepCD--;
//             } else {
//               if (Math.random() * 100 < posKeepRate || moveState === 'tempt') {
//                 momentUma.otherCond.posKeepStart = preUma.pos;
//                 momentUma.otherCond.posKeepMode = 'speedUp';
//               }
//               momentUma.otherCond.posKeepCD = 2 * framesPerSec;
//             }
//             // check overtake mode
//           } else if (umasOrder[1].index !== umaParams.index) {
//             if (posKeepCD !== 0) {
//               momentUma.otherCond.posKeepCD--;
//             } else {
//               if (Math.random() * 100 < posKeepRate || moveState === 'tempt') {
//                 momentUma.otherCond.posKeepStart = preUma.pos;
//                 momentUma.otherCond.posKeepMode = 'overtake';
//               }
//               momentUma.otherCond.posKeepCD = 2 * framesPerSec;
//             }
//           }
//           break;
//         case 'speedUp':
//           // check end
//           if (
//             preUma.pos - posKeepStart >= sectionDist ||
//             (umasOrder[1].index === umaParams.index &&
//               preUma.pos - umasOrder[2].pos > 4.5)
//           ) {
//             momentUma.otherCond.posKeepMode = 'normal';
//           }
//           break;
//         case 'overtake':
//           // check end
//           if (
//             preUma.pos - posKeepStart >= sectionDist ||
//             (umasOrder[1].index === umaParams.index &&
//               preUma.pos - umasOrder[2].pos > 10.0)
//           ) {
//             momentUma.otherCond.posKeepMode = 'normal';
//           }
//           break;
//       }
//       break;
//     case '2':
//     case '3':
//     case '4':
//       break;
//   }
// };

// const posKeepEffectCoef = {
//   normal: 1.0,
//   speedUp: 1.04,
//   overtake: 1.05,
// };
