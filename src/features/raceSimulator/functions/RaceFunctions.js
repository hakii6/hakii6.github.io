import SysSetting from '../features/SysSetting';
import { calSpCost } from './CustomFunctions';

const { framesPerSec, frameLength } = SysSetting;

const posKeepEffectCoef = {
  normal: 1.0,
  speedUp: 1.04,
  overtake: 1.05,
};

const checkSpurt = (objParams) => {
  const { preUma, momentUma, umaParams, raceParams } = objParams;
  // const { v } = raceParams
  const { v, spCostCoef } = umaParams;
  const { sp } = preUma;
  const spurtingTime = (raceParams.dist - preUma.pos - 60) / v.spurting;
  const spNeeded = calSpCost(
    v.spurting,
    spurtingTime,
    spCostCoef.spurting,
    raceParams
  );
  return sp >= spNeeded;
};

const checkSlopeValue = (objParams) => {
  const { preUma, momentUma, umaParams, raceParams } = objParams;
  const { slopes, dist } = raceParams;
  // Linear interpolation
  const t = (1000 * preUma.pos) / dist;
  const i = Math.floor(t);
  const slopeValue = (slopes[i] + (slopes[i + 1] - slopes[i]) * (t - i)) / 1.0;
  return slopeValue * 100;
};

const setPosKeepEffect = (objParams) => {
  const { preUma, momentUma, umaParams, raceParams, umasOrder } = objParams;
  const { moveState } = momentUma;
  const { posKeepRate } = umaParams;
  const { sectionDist } = raceParams;
  const { posKeepMode, posKeepStart, posKeepCD } = momentUma.otherCond;

  switch (umaParams.usingStyle) {
    case '1':
      switch (posKeepMode) {
        case 'normal':
          // check speedUp mode
          if (
            umasOrder[1].index === umaParams.index &&
            preUma.pos - umasOrder[2].pos < 4.5
          ) {
            if (posKeepCD !== 0) {
              momentUma.otherCond.posKeepCD--;
            } else {
              if (Math.random() * 100 < posKeepRate || moveState === 'tempt') {
                momentUma.otherCond.posKeepStart = preUma.pos;
                momentUma.otherCond.posKeepMode = 'speedUp';
              }
              momentUma.otherCond.posKeepCD = 2 * framesPerSec;
            }
            // check overtake mode
          } else if (umasOrder[1].index !== umaParams.index) {
            if (posKeepCD !== 0) {
              momentUma.otherCond.posKeepCD--;
            } else {
              if (Math.random() * 100 < posKeepRate || moveState === 'tempt') {
                momentUma.otherCond.posKeepStart = preUma.pos;
                momentUma.otherCond.posKeepMode = 'overtake';
              }
              momentUma.otherCond.posKeepCD = 2 * framesPerSec;
            }
          }
          break;
        case 'speedUp':
          // check end
          if (
            preUma.pos - posKeepStart >= sectionDist ||
            (umasOrder[1].index === umaParams.index &&
              preUma.pos - umasOrder[2].pos > 4.5)
          ) {
            momentUma.otherCond.posKeepMode = 'normal';
          }
          break;
        case 'overtake':
          // check end
          if (
            preUma.pos - posKeepStart >= sectionDist ||
            (umasOrder[1].index === umaParams.index &&
              preUma.pos - umasOrder[2].pos > 10.0)
          ) {
            momentUma.otherCond.posKeepMode = 'normal';
          }
          break;
      }
      break;
    case '2':
    case '3':
    case '4':
      break;
  }
};

const calTargetV = (objParams) => {
  const { preUma, momentUma, umaParams, raceParams } = objParams;
  let posKeepEffect = 1.0;
  if (preUma.section <= 10) {
    setPosKeepEffect(objParams);
    posKeepEffect = posKeepEffectCoef[momentUma.otherCond.posKeepMode];
  }

  let slopeEffect = 0;
  const slopeValue = checkSlopeValue(objParams);
  if (slopeValue >= 1) {
    slopeEffect = (slopeValue * -200) / umaParams.status.power;
  }

  return (
    umaParams.v[momentUma.moveState] * posKeepEffect +
    slopeEffect
  ).round();
};

export const checkMoveState = (objParams) => {
  const { preUma, momentUma, umaParams, raceParams } = objParams;

  const { v } = umaParams;
  if (preUma.sp <= 0) {
    return 'tiring';
  }
  switch (preUma.moveState) {
    case 'startdash':
      if (preUma.momentV >= v.startdash) {
        return 'phase' + String(preUma.phase);
      }
      return 'startdash';
    case 'spurting':
      return 'spurting';
    // break
    default:
      if (preUma.section > 16 && checkSpurt(objParams)) {
        return 'spurting';
      }
      return 'phase' + String(preUma.phase);
  }
};

export const checkCostState = (objParams) => {
  const { preUma, momentUma, umaParams, raceParams } = objParams;

  switch (preUma.costState) {
    case 'tempt':
      momentUma.otherCond.temptCount++;
      if (momentUma.otherCond.temptCount >= 12 * framesPerSec) {
        return 'normal';
      } else if (
        momentUma.otherCond.temptCount >= momentUma.otherCond.temptLast
      ) {
        if (Math.random() * 100 < 55) {
          return 'normal';
        } else {
          momentUma.otherCond.temptLast += 3 * framesPerSec;
        }
      }
      break;
    case 'normal':
      if (
        preUma.section === umaParams.temptSection &&
        !momentUma.otherCond.ifTempt
      ) {
        momentUma.otherCond.temptLast = 3 * framesPerSec;
        momentUma.otherCond.temptCount = 1;
        momentUma.otherCond.ifTempt = true;
        return 'tempt';
      } else if (momentUma.moveState === 'spurting') {
        return 'spurting';
      }
      break;
    case 'spurting':
      break;
    case 'slacking':
      // unknown right now
      break;
    case 'descentMode':
      /////////////////////
      // todo
      break;
  }
  return preUma.costState;
};

export const moveProcess = (objParams) => {
  const { preUma, momentUma, umaParams, raceParams } = objParams;

  const { v, a, spCostCoef } = umaParams;
  const { moveState, costState } = momentUma;
  const preV = preUma.momentV;
  let nextV, avgV;
  let momentA;
  let targetV = moveState !== 'tiring' ? calTargetV(objParams) : v.tiring;

  // ===, <, >  3 condition
  if (preV === targetV) {
    nextV = targetV;
    avgV = targetV;
    momentA = 0;
  } else {
    // set momentA
    momentA =
      preV < targetV
        ? a.acc.normal['phase' + String(preUma.phase)]
        : a.dec['phase' + String(preUma.phase)];
    // console.log(momentA)
    // startdash bonus
    if (moveState === 'startdash') {
      momentA += 24.0;
    }

    // cal nextV
    nextV = preV + momentA * frameLength;

    // nextV can't be over targetV
    // check in the middle (means it would accelerate too much)
    if (
      targetV !== Math.min(preV, targetV, nextV) &&
      targetV !== Math.max(preV, targetV, nextV)
    ) {
      nextV = targetV;
    }
    avgV = ((preV + nextV) / 2).round();
  }
  const spCost = calSpCost(
    avgV,
    frameLength,
    spCostCoef[costState],
    raceParams
  );
  // console.log(momentA, nextV, targetV)
  return Object.assign(momentUma, { nextV, avgV, targetV, momentA, spCost });
};

export const moveResult = (objParams) => {
  const { preUma, momentUma, umaParams, raceParams } = objParams;

  const { nextV, avgV, targetV, momentA, spCost, otherCond } = momentUma;
  const { pos, phase, section, sp } = preUma;
  const { phaseLine, sectionDist } = raceParams;
  const { moveState, costState } = momentUma;
  let movement = (avgV * frameLength).round();
  if (pos + movement >= umaParams.dist) {
    movement = umaParams.dist - pos;
  }
  return Object.assign(momentUma, {
    result: {
      pos: (pos + movement).round(),
      sp: (sp - spCost).round(),
      momentV: nextV,
      phase: pos >= phaseLine[phase] ? phase + 1 : phase,
      section: Math.ceil(pos / sectionDist),
      moveState,
      costState,
      otherCond,
    },
  });
};
