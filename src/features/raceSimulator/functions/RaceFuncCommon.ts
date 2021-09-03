import { UmaState, RaceParams } from '../types';

import Constants from '../constants/Constants';

const { framesPerSec, frameLength, statusType } = Constants;

export const checkSpurt = (umaState: UmaState): boolean => {
  const { momentState, momentFrame, umaParams, raceParams } = umaState;
  const { sp, pos, momentSpeed } = momentFrame;
  const { v, spCostCoef } = umaParams;
  const { surfaceCoef, baseV, dist } = raceParams;
  const { spurting: spurtingSpeed } = v!;
  const spVCoef = (spurtingSpeed - baseV + 12.0) ** 2 / 144;
  const spurtingTime = (dist - pos - 60) / spurtingSpeed;
  const spNeeded =
    20 * spCostCoef!.spurting * spVCoef * surfaceCoef.sp * spurtingTime;
  return sp >= spNeeded;
};

export const checkTemptStart = (umaState: UmaState): boolean => {
  const { momentState, momentFrame, umaParams, raceParams } = umaState;
  const { momentSpeed, pos, sp } = momentFrame;
  const { phase, section, moveState, costState, temptCond } = momentState;
  const { v } = umaParams;

  if (
    section > 10 ||
    section !== umaState.umaParams.temptSection ||
    temptCond.ifTempt
  ) {
    return false;
  }

  umaState.momentState.temptCond = {
    ...umaState.momentState.temptCond,
    temptLast: 3 * framesPerSec,
    temptCount: 1,
    ifTempt: true,
  };
  return true;
};
export const checkTemptEnd = (umaState: UmaState): boolean => {
  umaState.momentState.temptCond.temptCount += 1;

  const { temptCond, costState } = umaState.momentState;
  const { temptCount, temptLast, ifTempt } = temptCond;

  if (
    temptCount >= 12 * framesPerSec ||
    (temptCount >= temptLast && Math.random() * 100 < 55)
  ) {
    return true;
  }

  umaState.momentState.temptCond = {
    ...temptCond,
    temptLast: temptLast + 3 * framesPerSec,
  };
  return false;
};

export default checkSpurt;
