import { Uma, UmaState, RaceParams } from '../types';

import Constants from '../constants/Constants';

import { checkSpurt, checkTemptStart, checkTemptEnd } from './RaceFuncCommon';
import { roundNumbers } from './Common';

const { framesPerSec, frameLength, statusType } = Constants;

// set momentState functions (would be used in next frame)
const setPos = (umaState: UmaState): void => {
  const { momentState, momentFrame, umaParams, raceParams } = umaState;
  const { pos } = momentFrame;
  const { phaseLine, sectionDist, dist, slopes } = raceParams;

  const newMomentState = {
    ...momentState,
    phase: phaseLine.findIndex((value: number) => pos >= value) + 1,
    section: Math.floor(pos / sectionDist) + 1,
  };
  newMomentState.posKeeping = newMomentState.section <= 10;
  umaState.momentState = { ...newMomentState };
};

const setSlopeEffect = (umaState: UmaState): void => {
  const { momentState, momentFrame, umaParams, raceParams } = umaState;
  const { pos } = momentFrame;
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
    slopeEffect = (slopeValue * 200) / umaParams.status.power;
  } else if (slopeValue <= -1) {
    slopeType = 'descent';

    // // todo
    // slopeEffect = slopeValue * 200 / umaParams.status.power;
  }

  umaState.momentState = {
    ...umaState.momentState,
    slopeType,
    slopeEffect,
  };
};

const setPosKeepCoef = (umaState: UmaState): void => {
  // todo
  umaState.momentState.posKeepCoef = 1;
  // const posKeepCoefCoef = {
  //   normal: 1.0,
  //   speedUp: 1.04,
  //   overtake: 1.05,
  // };
  // const { preUma, momentUma, umaParams, raceParams, umasOrder } = objParams;
  // const { moveState } = momentUma;
  // const { posKeepRate } = umaParams;
  // const { sectionDist } = raceParams;
  // const { posKeepMode, posKeepStart, posKeepCD } = momentUma.otherCond;

  // switch (umaParams.usingStyle) {
  //   case '1':
  //     switch (posKeepMode) {
  //       case 'normal':
  //         // check speedUp mode
  //         if (
  //           umasOrder[1].index === umaParams.index &&
  //           preUma.pos - umasOrder[2].pos < 4.5
  //         ) {
  //           if (posKeepCD !== 0) {
  //             momentUma.otherCond.posKeepCD--;
  //           } else {
  //             if (Math.random() * 100 < posKeepRate || moveState === 'tempt') {
  //               momentUma.otherCond.posKeepStart = preUma.pos;
  //               momentUma.otherCond.posKeepMode = 'speedUp';
  //             }
  //             momentUma.otherCond.posKeepCD = 2 * framesPerSec;
  //           }
  //           // check overtake mode
  //         } else if (umasOrder[1].index !== umaParams.index) {
  //           if (posKeepCD !== 0) {
  //             momentUma.otherCond.posKeepCD--;
  //           } else {
  //             if (Math.random() * 100 < posKeepRate || moveState === 'tempt') {
  //               momentUma.otherCond.posKeepStart = preUma.pos;
  //               momentUma.otherCond.posKeepMode = 'overtake';
  //             }
  //             momentUma.otherCond.posKeepCD = 2 * framesPerSec;
  //           }
  //         }
  //         break;
  //       case 'speedUp':
  //         // check end
  //         if (
  //           preUma.pos - posKeepStart >= sectionDist ||
  //           (umasOrder[1].index === umaParams.index &&
  //             preUma.pos - umasOrder[2].pos > 4.5)
  //         ) {
  //           momentUma.otherCond.posKeepMode = 'normal';
  //         }
  //         break;
  //       case 'overtake':
  //         // check end
  //         if (
  //           preUma.pos - posKeepStart >= sectionDist ||
  //           (umasOrder[1].index === umaParams.index &&
  //             preUma.pos - umasOrder[2].pos > 10.0)
  //         ) {
  //           momentUma.otherCond.posKeepMode = 'normal';
  //         }
  //         break;
  //     }
  //     break;
  //   case '2':
  //   case '3':
  //   case '4':
  //     break;
  // }
};

const setSkillEffect = (umaState: UmaState): void => {
  // todo
  umaState.momentState.skillEffect = 0;
};

const setMoveState = (umaState: UmaState): void => {
  const { momentState, momentFrame, umaParams, raceParams } = umaState;
  const { momentSpeed, pos, sp } = momentFrame;
  const { phase, section, moveState, costState } = momentState;
  const { v } = umaParams;

  let newMoveState = momentState.moveState;
  if (sp <= 0) {
    newMoveState = 'tiring';
  } else {
    switch (momentState.moveState) {
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
  umaState.momentState.moveState = newMoveState;
};

const setCostState = (umaState: UmaState): void => {
  const { momentState, momentFrame, raceParams } = umaState;
  const { moveState, costState } = momentState;

  let newCostState = costState;
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
        newCostState = moveState === 'spurting' ? 'spurting' : 'normal';
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
      newCostState = costState;
      break;
  }
  umaState.momentState.costState = newCostState;
};

// set frameDetails functions (would be used in next frame)
const setStartSpeed = (umaState: UmaState): void => {
  // bc4 some reason, extract it first for the future
  umaState.frameDetails.startSpeed = umaState.momentFrame.momentSpeed;
};

const setTargetSpeed = (umaState: UmaState): void => {
  const { momentState, frameDetails, umaParams, raceParams } = umaState;
  const {
    moveState,
    costState,
    slopeType,
    slopeEffect,
    posKeepCoef,
    skillEffect,
  } = momentState;
  const { startSpeed } = frameDetails;
  const { v } = umaParams;
  const baseTargetV = v![moveState];

  const targetSpeed = baseTargetV * posKeepCoef + slopeEffect + skillEffect;
  const speedDiff = startSpeed - targetSpeed;

  umaState.frameDetails = roundNumbers({
    ...umaState.frameDetails,
    targetSpeed,
    speedDiff,
  });
};

const setMomentAcc = (umaState: UmaState): void => {
  const { momentState, momentFrame, frameDetails, umaParams, raceParams } =
    umaState;
  const { moveState, phase, slopeType } = momentState;
  const { momentSpeed } = momentFrame;
  const { targetSpeed, speedDiff } = frameDetails;
  const { a } = umaParams;
  let newMomentAcc = 0;

  // tiring on top level
  if (moveState === 'tiring') {
    newMomentAcc = a!.dec.tiring;
  } else if (speedDiff !== 0) {
    if (speedDiff < 0) {
      newMomentAcc = a!.acc[slopeType][`phase${String(phase)}`];
    } else {
      newMomentAcc = a!.dec[`phase${String(phase)}`];
    }

    // startdash bonus
    if (moveState === 'startdash') {
      newMomentAcc += 24.0;
    }
  }
  umaState.frameDetails.momentAcc = newMomentAcc;
};

const setEndSpeed = (umaState: UmaState): void => {
  // bc4 some reason, extract it first for the future
  const { startSpeed, targetSpeed, momentAcc, speedDiff } =
    umaState.frameDetails;

  const totalAcc = momentAcc * frameLength;

  umaState.frameDetails.totalAcc = totalAcc;
  umaState.frameDetails.endSpeed =
    Math.abs(totalAcc) > Math.abs(speedDiff)
      ? targetSpeed
      : startSpeed + totalAcc;
};

const setAvgSpeed = (umaState: UmaState): void => {
  const { startSpeed, endSpeed } = umaState.frameDetails;
  umaState.frameDetails.avgSpeed = (startSpeed + endSpeed) / 2;
};

const setSpCost = (umaState: UmaState): void => {
  const { momentState, frameDetails, umaParams, raceParams } = umaState;
  const { costState } = momentState;
  const { avgSpeed } = frameDetails;
  const { spCostCoef } = umaParams;
  const { surfaceCoef, baseV } = raceParams;

  const spVCoef = (avgSpeed - baseV + 12.0) ** 2 / 144;

  umaState.frameDetails.spCost =
    20 * spCostCoef![costState] * spVCoef * surfaceCoef.sp * frameLength;
};

// set nextFrame functions
const setNextSp = (umaState: UmaState): void => {
  umaState.nextFrame.sp =
    umaState.momentFrame.sp - umaState.frameDetails.spCost;
};

const setNextSpeed = (umaState: UmaState): void => {
  // bc4 some reason, extract it first for the future
  umaState.nextFrame.momentSpeed = umaState.frameDetails.endSpeed;
};

const setNextPos = (umaState: UmaState): void => {
  const { momentFrame, frameDetails, umaParams, raceParams } = umaState;
  const { pos } = momentFrame;
  const { avgSpeed } = frameDetails;

  const nextPos = pos + avgSpeed * frameLength;

  umaState.nextFrame.pos =
    nextPos <= raceParams.dist ? nextPos : raceParams.dist;
};

export const umaMomentStateFuncList = [
  setPos,
  setSlopeEffect,
  setMoveState,
  setCostState,
  setPosKeepCoef,
  setSkillEffect,
];

export const umaFrameDetailsFuncList = [
  setStartSpeed,
  setTargetSpeed,
  setMomentAcc,
  setEndSpeed,
  setAvgSpeed,
  setSpCost,
];

export const umaNextFrameFuncList = [setNextSpeed, setNextSp, setNextPos];

export default umaMomentStateFuncList;
