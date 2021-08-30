import { Uma, RaceParams, Status, StatusType } from '../types';

import Constants from '../constants/Constants';
import Coefs from '../constants/Coefs';
import CourseData from '../constants/CourseData.json';

import { calSpCost } from './Common';

const courseData = CourseData as any;
const constants = Constants as any;
const coefs = Coefs as any;

const { framesPerSec, frameLength, statusType } = constants;

const coefData = (uma: Uma) => {
  const { motivation, usingStyle, fit } = uma;
  const { style, dist, surface } = fit;

  const motBonus = coefs.motivation[motivation];
  const styleFitCoef = coefs.styleFit[style];
  const distFitCoef = coefs.distFit[dist];
  const surfaceFitCoef = coefs.surfaceFit[surface];
  const usingStyleCoef = coefs.usingStyle[usingStyle];
  return {
    motBonus,
    styleFitCoef,
    distFitCoef,
    surfaceFitCoef,
    usingStyleCoef,
  };
};

const initStatus = (uma: Uma, raceParams: RaceParams) => {
  const rawStatus = uma.status;
  const {
    motBonus,
    styleFitCoef,
    distFitCoef,
    surfaceFitCoef,
    usingStyleCoef,
  } = coefData(uma);
  const { statusCheck } = raceParams;

  // multiply by track status check
  const statusToChcek = statusCheck.map(
    (value: number) => statusType[value - 1]
  );
  const speedMutiplier = statusToChcek.reduce(
    (prevValue: number, curValue: StatusType) => {
      return (
        Math.min(
          Math.ceil((rawStatus[curValue as StatusType] * motBonus) / 300),
          4
        ) * 0.05
      );
    },
    1
  );

  // ///////////
  // // todo: let users to set it by themselves
  const passiveSkillEffect = {
    speed: 0,
    stamina: 0,
    power: 0,
    guts: 0,
    wisdom: 0,
  };

  const status = {
    speed: (
      rawStatus.speed * motBonus * speedMutiplier +
      raceParams.surfaceConstant.speed +
      passiveSkillEffect.speed
    ).round(),
    stamina: (
      rawStatus.stamina * motBonus +
      passiveSkillEffect.stamina
    ).round(),
    power: (
      rawStatus.power * motBonus +
      raceParams.surfaceConstant.power +
      passiveSkillEffect.power
    ).round(),
    guts: (rawStatus.guts * motBonus + passiveSkillEffect.guts).round(),
    wisdom: (
      rawStatus.wisdom * motBonus * styleFitCoef.wisdom +
      passiveSkillEffect.wisdom
    ).round(),
  };

  return { rawStatus, status };
};

export const initUmaCond = (
  uma: Uma,
  raceParams: RaceParams,
  rawStatus: Status,
  status: Status
) => {
  const {
    motBonus,
    styleFitCoef,
    distFitCoef,
    surfaceFitCoef,
    usingStyleCoef,
  } = coefData(uma);
  const {
    dist,
    phaseLine,
    sectionDist,
    slopes,
    statusCheck,
    surfaceConstant,
    surfaceCoef,
    baseV,
  } = raceParams;

  const skillActRate: number = Math.max(
    100 - 90.0 / (rawStatus.wisdom * motBonus),
    20
  );
  const temptRate: number = (6.5 / Math.log10(0.1 * status.wisdom + 1)) ** 2;
  const posKeepRate: number =
    (uma.usingStyle === '1' ? 20 : 15) * Math.log10(0.1 * status.wisdom);
  const v = (() => {
    // /////////
    // TODO: set random
    // let wisMod = {}
    // wisMod.max = ((uma.status.wisdom / 5500) * (Math.log10(uma.status.wisdom) - 1) * 0.01)
    // wisMod.min = (wisMod.max - .65)
    // wisMod.avg = (wisMod.max - .325)

    const wisMod: number =
      ((status.wisdom / 5500) * Math.log10(status.wisdom * 0.1) - 0.325) * 0.01;
    const vCoef = usingStyleCoef.v;
    const speedEffect: number =
      (status.speed * 500) ** 0.5 * distFitCoef.v * 0.002;

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
  })();

  const a = (() => {
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
      },
      dec: {
        tiring: -1.2,
        phase0: -0.8,
        phase1: -1.0,
        phase2: -1.2,
      },
    };
  })();

  const spCostCoef = {
    ...constants.spConsume,
    spurting: 1 + (200 / (600 * status.guts) ** 0.5).round(),
  };
  const spMax = (dist + 0.8 * status.stamina * usingStyleCoef.sp).round();

  const safeSpurtSp = calSpCost(
    v.spurting,
    dist / 3 / v.spurting,
    spCostCoef.spurting,
    raceParams
  );
  const { usingStyle } = uma;

  return {
    skillActRate,
    temptRate,
    v,
    a,
    spCostCoef,
    spMax,
    safeSpurtSp,
    posKeepRate,
    usingStyle,
  };
};

export const initUmaRandCond = (temptRate: number) => {
  // init tempt 2~9(true) or -1(false)
  const temptSection =
    Math.random() * 100 < temptRate ? Math.floor(Math.random() * 8) + 1 : -1;
  return { temptSection };
};

export const initUma = (uma: Uma, raceParams: RaceParams) => {
  // uma status after modifyng
  const { rawStatus, status } = initStatus(uma, raceParams);

  // race evaluate (fixed)
  const {
    skillActRate,
    temptRate,
    spCostCoef,
    spMax,
    v,
    a,
    safeSpurtSp,
    posKeepRate,
    usingStyle,
  } = initUmaCond(uma, raceParams, rawStatus, status);

  // race evaluate (random)
  const { temptSection } = initUmaRandCond(temptRate);

  return {
    umaName: uma.umaName,
    rawStatus,
    status,
    skillActRate,
    temptRate,
    spCostCoef,
    spMax,
    v,
    a,
    safeSpurtSp,
    posKeepRate,
    usingStyle,
    temptSection,
  };
};
