import {
  Uma,
  RaceParams,
  Status,
  StatusType,
  JsonData,
  StrNumDict,
  StrDict,
  CoefType,
  Acc,
} from '../types';

import Constants from '../constants/Constants';
import Coefs from '../constants/Coefs';
import CourseData from '../constants/CourseData.json';

const courseData = CourseData;
const constants = Constants;
const coefs = Coefs;

const { framesPerSec, frameLength, statusType } = constants;

export const setTemptSection = (temptRate: number): number => {
  return Math.random() * 100 < temptRate
    ? Math.floor(Math.random() * 8) + 1
    : -1;
};

export const setSkillActRate = (
  rawStatus: Status,
  motBonus: number
): number => {
  return Math.max(100 - 90.0 / (rawStatus.wisdom * motBonus), 20);
};

export const setTemptRate = (status: Status): number => {
  return (6.5 / Math.log10(0.1 * status.wisdom + 1)) ** 2;
};

export const setPosKeepRate = (uma: Uma, status: Status): number => {
  return (uma.usingStyle === '1' ? 20 : 15) * Math.log10(0.1 * status.wisdom);
};

export const setV = (
  status: Status,
  coefData: CoefType,
  raceParams: RaceParams
): StrNumDict => {
  // /////////
  // TODO: set random
  // let wisMod = {}
  // wisMod.max = ((uma.status.wisdom / 5500) * (Math.log10(uma.status.wisdom) - 1) * 0.01)
  // wisMod.min = (wisMod.max - .65)
  // wisMod.avg = (wisMod.max - .325)

  const { distFitCoef, usingStyleCoef } = coefData;
  const { baseV } = raceParams;

  const wisMod =
    ((status.wisdom / 5500) * Math.log10(status.wisdom * 0.1) - 0.325) * 0.01;
  const vCoef = usingStyleCoef.v;
  const speedEffect = (status.speed * 500) ** 0.5 * distFitCoef.v * 0.002;

  const tmp = {
    startdash: (baseV * 0.85).round(),
    phase0: (baseV * (vCoef.phase0 + wisMod)).round(),
    phase1: (baseV * (vCoef.phase1 + wisMod)).round(),
    phase2: (baseV * (vCoef.phase2 + wisMod) + speedEffect).round(),
    phase3: (baseV * (vCoef.phase2 + wisMod) + speedEffect).round(),
    tiring: (baseV * 0.85 + (status.guts * 200) ** 0.5 * 0.001).round(),
    spurting: speedEffect,
  };
  tmp.spurting += (tmp.phase2 + baseV * 0.01) * 1.05;
  tmp.spurting = tmp.spurting.round();

  return tmp;
};

export const setA = (status: Status, coefData: CoefType): Acc => {
  const { surfaceFitCoef, distFitCoef, usingStyleCoef } = coefData;
  const accCoef =
    (500 * status.power) ** 0.5 * surfaceFitCoef.a * distFitCoef.a;
  const aCoef = usingStyleCoef.a;
  return {
    acc: {
      normal: {
        phase0: (accCoef * 0.0006 * aCoef.phase0).round(),
        phase1: (accCoef * 0.0006 * aCoef.phase1).round(),
        phase2: (accCoef * 0.0006 * aCoef.phase2).round(),
        phase3: (accCoef * 0.0006 * aCoef.phase3).round(),
      },
      ascent: {
        phase0: (accCoef * 0.0004 * aCoef.phase0).round(),
        phase1: (accCoef * 0.0004 * aCoef.phase1).round(),
        phase2: (accCoef * 0.0004 * aCoef.phase2).round(),
        phase3: (accCoef * 0.0004 * aCoef.phase3).round(),
      },
      descent: {
        phase0: (accCoef * 0.0006 * aCoef.phase0).round(),
        phase1: (accCoef * 0.0006 * aCoef.phase1).round(),
        phase2: (accCoef * 0.0006 * aCoef.phase2).round(),
        phase3: (accCoef * 0.0006 * aCoef.phase3).round(),
      },
    },
    dec: {
      tiring: -1.2,
      phase0: -0.8,
      phase1: -1.0,
      phase2: -1.2,
      phase3: -1.2,
    },
  };
};

export const setSpCostCoef = (status: Status): StrNumDict => ({
  ...constants.spConsume,
  spurting: 1 + (200 / (600 * status.guts) ** 0.5).round(),
});
export const setSpMax = (
  status: Status,
  coefData: CoefType,
  raceParams: RaceParams
): number => {
  console.log(
    raceParams.dist + 0.8 * status.stamina * coefData.usingStyleCoef.sp
  );
  return (
    raceParams.dist +
    0.8 * status.stamina * coefData.usingStyleCoef.sp
  ).round();
};
