import {
  Uma,
  UmaParams,
  RaceParams,
  Status,
  StatusType,
  CoefType,
  Acc,
  UmaState,
} from '../types';
import Constants from '../constants/Constants';
import Coefs from '../constants/Coefs';
import CourseData from '../constants/CourseData.json';

const courseData: Record<string, any> = CourseData;
const constants: Record<string, any> = Constants;
const coefs: Record<string, any> = Coefs;

const { framesPerSec, frameLength, statusType } = constants;

export const setTemptSection = (
  umaParams: UmaParams,
  raceParams: RaceParams
): UmaParams => {
  const temptSection =
    Math.random() * 100 < umaParams.temptRate
      ? Math.floor(Math.random() * 8) + 1
      : -1;
  return { ...umaParams, temptSection };
};

export const setSkillActRate = (
  umaParams: UmaParams,
  raceParams: RaceParams
): UmaParams => {
  const { rawStatus, coefData } = umaParams;
  const { motBonus } = coefData!;
  const skillActRate = Math.max(
    100 - 90.0 / (rawStatus!.wisdom * motBonus),
    20
  );
  return { ...umaParams, skillActRate };
};

export const setTemptRate = (
  umaParams: UmaParams,
  raceParams: RaceParams
): UmaParams => {
  const { coefData, status } = umaParams;
  const temptRate = (6.5 / Math.log10(0.1 * status!.wisdom + 1)) ** 2;
  return { ...umaParams, temptRate };
};

export const setPosKeepRate = (
  umaParams: UmaParams,
  raceParams: RaceParams
): UmaParams => {
  const { coefData, status, usingStyle } = umaParams;
  const posKeepRate =
    (usingStyle === '1' ? 20 : 15) * Math.log10(0.1 * status!.wisdom);
  return { ...umaParams, posKeepRate };
};

export const setV = (
  umaParams: UmaParams,
  raceParams: RaceParams
): UmaParams => {
  // /////////
  // TODO: set random
  // let wisMod = {}
  // wisMod.max = ((uma.status.wisdom / 5500) * (Math.log10(uma.status.wisdom) - 1) * 0.01)
  // wisMod.min = (wisMod.max - .65)
  // wisMod.avg = (wisMod.max - .325)

  const { coefData, status } = umaParams;
  const { distFitCoef, usingStyleCoef } = coefData!;
  const { baseV } = raceParams;

  const wisMod =
    ((status!.wisdom / 5500) * Math.log10(status!.wisdom * 0.1) - 0.325) * 0.01;
  const vCoef = usingStyleCoef.v;
  const speedEffect = (status!.speed * 500) ** 0.5 * distFitCoef.v * 0.002;

  const v = {
    startdash: baseV * 0.85,
    phase0: baseV * (vCoef.phase0 + wisMod),
    phase1: baseV * (vCoef.phase1 + wisMod),
    phase2: baseV * (vCoef.phase2 + wisMod) + speedEffect,
    phase3: baseV * (vCoef.phase2 + wisMod) + speedEffect,
    tiring: baseV * 0.85 + (status!.guts * 200) ** 0.5 * 0.001,
    spurting: speedEffect,
  };
  v.spurting += (v.phase2 + baseV * 0.01) * 1.05;

  return { ...umaParams, v };
};

export const setA = (
  umaParams: UmaParams,
  raceParams: RaceParams
): UmaParams => {
  const { coefData, status } = umaParams;
  const { surfaceFitCoef, distFitCoef, usingStyleCoef } = coefData!;
  const accCoef =
    (500 * status!.power) ** 0.5 * surfaceFitCoef.a * distFitCoef.a;
  const aCoef = usingStyleCoef.a;
  return {
    ...umaParams,
    a: {
      acc: {
        normal: {
          phase0: accCoef * 0.0006 * aCoef.phase0,
          phase1: accCoef * 0.0006 * aCoef.phase1,
          phase2: accCoef * 0.0006 * aCoef.phase2,
          phase3: accCoef * 0.0006 * aCoef.phase3,
        },
        ascent: {
          phase0: accCoef * 0.0004 * aCoef.phase0,
          phase1: accCoef * 0.0004 * aCoef.phase1,
          phase2: accCoef * 0.0004 * aCoef.phase2,
          phase3: accCoef * 0.0004 * aCoef.phase3,
        },
        descent: {
          phase0: accCoef * 0.0006 * aCoef.phase0,
          phase1: accCoef * 0.0006 * aCoef.phase1,
          phase2: accCoef * 0.0006 * aCoef.phase2,
          phase3: accCoef * 0.0006 * aCoef.phase3,
        },
      },
      dec: {
        tiring: -1.2,
        phase0: -0.8,
        phase1: -1.0,
        phase2: -1.2,
        phase3: -1.2,
      },
    },
  };
};

export const setSpCostCoef = (
  umaParams: UmaParams,
  raceParams: RaceParams
): UmaParams => {
  const spCostCoef = {
    ...constants.spConsume,
    spurting: 1 + 200 / (600 * umaParams.status!.guts) ** 0.5,
  };
  return { ...umaParams, spCostCoef };
};
export const setSpMax = (
  umaParams: UmaParams,
  raceParams: RaceParams
): UmaParams => {
  const { coefData, status } = umaParams;
  const spMax =
    raceParams.dist + 0.8 * status!.stamina * coefData!.usingStyleCoef.sp;
  return { ...umaParams, spMax };
};
