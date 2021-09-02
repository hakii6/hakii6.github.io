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

import Constants from '../constants/Constants';
import Coefs from '../constants/Coefs';
import CourseData from '../constants/CourseData.json';

const courseData = CourseData;
const constants = Constants;
const coefs = Coefs;
const { framesPerSec, frameLength, statusType } = constants;

const setSpCost = (umaState: UmaState): void => {
  const { momentSpeed, costState, umaParams, raceParams } = umaState;
  const { spCostCoef } = umaParams;
  // const spCostCoef = umaParams.spCostCoef[costState];
  const { surfaceCoef, baseV } = raceParams;
  const spVCoef = (momentSpeed - baseV + 12.0) ** 2 / 144;
  umaState.spCost = (
    20 *
    spCostCoef![costState] *
    spVCoef *
    surfaceCoef.sp *
    frameLength
  ).round();
};

const setSlopeEffect = (umaState: UmaState): void => {
  const { pos, raceParams } = umaState;
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

  umaState.slopeType = slopeType;
  umaState.slopeEffect = slopeEffect;
};

const setPos = (umaState: UmaState): void => {
  const { pos, raceParams } = umaState;
  const { phaseLine, sectionDist, dist, slopes } = raceParams;
  umaState.phase = phaseLine.findIndex((value: number) => pos >= value) + 1;
  umaState.section = Math.floor(pos / sectionDist) + 1;
  umaState.posKeeping = umaState.section <= 10;

  setSlopeEffect(umaState);
};

const checkSpurt = (umaState: UmaState): boolean => {
  const { unusedSp, pos, momentSpeed, costState, umaParams, raceParams } =
    umaState;
  const { v, spCostCoef } = umaParams;
  const { surfaceCoef, baseV, dist } = raceParams;
  const { spurting: spurtingSpeed } = v!;
  const spVCoef = (spurtingSpeed - baseV + 12.0) ** 2 / 144;
  const spurtingTime = (dist - pos - 60) / spurtingSpeed;
  const spNeeded =
    20 * spCostCoef!.spurting * spVCoef * surfaceCoef.sp * spurtingTime;
  return unusedSp >= spNeeded;
};

const setMoveState = (umaState: UmaState): void => {
  let newMoveState: string;
  const {
    momentSpeed,
    moveState,
    unusedSp,
    umaParams,
    phase,
    section,
    raceParams,
  } = umaState;
  const { v } = umaParams;

  if (unusedSp <= 0) {
    newMoveState = 'tiring';
  } else {
    switch (moveState) {
      case 'startdash':
        newMoveState =
          momentSpeed >= v!.startdash ? `phase${String(phase)}` : 'startdash';
        break;
      case 'spurting':
        newMoveState = 'spurting';
        break;
      default:
        newMoveState =
          section > 16 && checkSpurt(umaState)
            ? 'spurting'
            : `phase${String(phase)}`;
        break;
    }
  }
  umaState.moveState = newMoveState;
};
const checkTemptStart = (umaState: UmaState): boolean => {
  if (
    umaState.section > 10 ||
    umaState.section !== umaState.umaParams.temptSection ||
    umaState.temptCond.ifTempt
  ) {
    return false;
  }

  umaState.temptCond = {
    ...umaState.temptCond,
    temptLast: 3 * framesPerSec,
    temptCount: 1,
    ifTempt: true,
  };
  return true;
};
const checkTemptEnd = (umaState: UmaState): boolean => {
  umaState.temptCond.temptCount += 1;

  const { temptCond, costState } = umaState;
  const { temptCount, temptLast, ifTempt } = temptCond;

  if (
    temptCount >= 12 * framesPerSec ||
    (temptCount >= temptLast && Math.random() * 100 < 55)
  ) {
    return true;
  }

  umaState.temptCond = {
    ...temptCond,
    temptLast: temptLast + 3 * framesPerSec,
  };
  return false;
};
const setCostState = (umaState: UmaState): void => {
  const { costState, section, temptCond, umaParams, raceParams } = umaState;

  let newCostState: string;

  if (costState === 'tempt') {
    if (checkTemptEnd(umaState)) {
      newCostState = 'normal';
    }
  }

  switch (costState) {
    case 'normal':
      if (checkTemptStart(umaState)) {
        newCostState = 'tempt';
      } else {
        newCostState =
          umaState.moveState === 'spurting' ? 'spurting' : 'normal';
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
      newCostState = umaState.costState;
      break;
  }
  umaState.costState = newCostState;
};

export const setPosKeepEffect = () => 1;

export const setTargetSpeed = (umaState: UmaState): void => {
  const { umaParams, momentSpeed, moveState, slopeType, slopeEffect } =
    umaState;
  const { v } = umaParams;

  const posKeepEffect = setPosKeepEffect();
  const baseTargetV = v![moveState];
  const skillEffect = 0;

  const targetSpeed = (
    baseTargetV * posKeepEffect +
    slopeEffect +
    skillEffect
  ).round();
  const speedDiff = (momentSpeed - targetSpeed).round();

  umaState.targetSpeed = targetSpeed;
  umaState.speedDiff = speedDiff;
};
export const setMomentAcc = (umaState: UmaState): void => {
  const {
    phase,
    umaParams,
    moveState,
    momentSpeed,
    unusedSp,
    targetSpeed,
    speedDiff,
    slopeType,
  } = umaState;
  const { a } = umaParams;
  let momentAcc = 0;
  if (speedDiff !== 0) {
    if (unusedSp <= 0) {
      momentAcc = a!.dec.tiring;
    } else {
      momentAcc =
        speedDiff > 0
          ? a!.acc[slopeType][`phase${String(phase)}`]
          : a!.dec[`phase${String(phase)}`];

      if (moveState === 'startdash') {
        momentAcc += 24.0;
      }
    }
  }
  umaState.momentAcc = momentAcc.round();
};
export const setNextUnusedSp = (umaState: UmaState): void => {
  umaState.nextUnusedSp = umaState.unusedSp - umaState.spCost;
};
export const setNextSpeed = (umaState: UmaState): void => {
  const {
    umaParams,
    moveState,
    momentSpeed,
    unusedSp,
    momentAcc,
    targetSpeed,
    speedDiff,
    slopeType,
  } = umaState;
  let nextSpeed: number = momentSpeed + momentAcc * frameLength;
  if ((nextSpeed - momentSpeed) * (nextSpeed - targetSpeed) > 0) {
    nextSpeed = targetSpeed;
  }
  umaState.nextSpeed = nextSpeed.round();
};
export const setNextPos = (umaState: UmaState): void => {
  const { nextSpeed, momentSpeed, pos, raceParams } = umaState;
  const avgSpeed = ((nextSpeed + momentSpeed) / 2).round();
  const nextPos = pos + avgSpeed * frameLength;
  umaState.nextPos = nextPos <= raceParams.dist ? nextPos : raceParams.dist;
  umaState.avgSpeed = avgSpeed;
};

export const getRaceFunctions = (): any => {
  const momentStateFunctions = [
    setPos,
    setMoveState,
    setCostState,
    setSpCost,
    setTargetSpeed,
    setMomentAcc,
  ];

  const nextStateFunctions = [setNextSpeed, setNextUnusedSp, setNextPos];
  return [momentStateFunctions, nextStateFunctions];
};

export default getRaceFunctions;

// // const setPosKeepEffect = (objParams) => {
// //   const { preUma, momentUma, umaParams, raceParams, umasOrder } = objParams;
// //   const { moveState } = momentUma;
// //   const { posKeepRate } = umaParams;
// //   const { sectionDist } = raceParams;
// //   const { posKeepMode, posKeepStart, posKeepCD } = momentUma.otherCond;

// //   switch (umaParams.usingStyle) {
// //     case '1':
// //       switch (posKeepMode) {
// //         case 'normal':
// //           // check speedUp mode
// //           if (
// //             umasOrder[1].index === umaParams.index &&
// //             preUma.pos - umasOrder[2].pos < 4.5
// //           ) {
// //             if (posKeepCD !== 0) {
// //               momentUma.otherCond.posKeepCD--;
// //             } else {
// //               if (Math.random() * 100 < posKeepRate || moveState === 'tempt') {
// //                 momentUma.otherCond.posKeepStart = preUma.pos;
// //                 momentUma.otherCond.posKeepMode = 'speedUp';
// //               }
// //               momentUma.otherCond.posKeepCD = 2 * framesPerSec;
// //             }
// //             // check overtake mode
// //           } else if (umasOrder[1].index !== umaParams.index) {
// //             if (posKeepCD !== 0) {
// //               momentUma.otherCond.posKeepCD--;
// //             } else {
// //               if (Math.random() * 100 < posKeepRate || moveState === 'tempt') {
// //                 momentUma.otherCond.posKeepStart = preUma.pos;
// //                 momentUma.otherCond.posKeepMode = 'overtake';
// //               }
// //               momentUma.otherCond.posKeepCD = 2 * framesPerSec;
// //             }
// //           }
// //           break;
// //         case 'speedUp':
// //           // check end
// //           if (
// //             preUma.pos - posKeepStart >= sectionDist ||
// //             (umasOrder[1].index === umaParams.index &&
// //               preUma.pos - umasOrder[2].pos > 4.5)
// //           ) {
// //             momentUma.otherCond.posKeepMode = 'normal';
// //           }
// //           break;
// //         case 'overtake':
// //           // check end
// //           if (
// //             preUma.pos - posKeepStart >= sectionDist ||
// //             (umasOrder[1].index === umaParams.index &&
// //               preUma.pos - umasOrder[2].pos > 10.0)
// //           ) {
// //             momentUma.otherCond.posKeepMode = 'normal';
// //           }
// //           break;
// //       }
// //       break;
// //     case '2':
// //     case '3':
// //     case '4':
// //       break;
// //   }
// // };

// // const posKeepEffectCoef = {
// //   normal: 1.0,
// //   speedUp: 1.04,
// //   overtake: 1.05,
// // };
