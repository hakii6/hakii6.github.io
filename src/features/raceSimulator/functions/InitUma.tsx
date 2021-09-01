import {
  Uma,
  RaceParams,
  Status,
  StatusType,
  JsonData,
  StrNumDict,
  StrDict,
  UmaParams,
  CoefType,
} from '../types';

import Constants from '../constants/Constants';
import Coefs from '../constants/Coefs';
import CourseData from '../constants/CourseData.json';

import {
  setV,
  setA,
  setTemptSection,
  setSkillActRate,
  setTemptRate,
  setSpCostCoef,
  setSpMax,
  setPosKeepRate,
} from './InitUmaCommon';

const courseData: JsonData = CourseData;
const constants: JsonData = Constants;
const coefs: JsonData = Coefs;

const { framesPerSec, frameLength, statusType } = constants;

const setCoefData = (uma: Uma): CoefType => {
  const { motivation, usingStyle, fit } = uma;
  const { style, dist, surface } = fit;
  return {
    motBonus: coefs.motivation[motivation],
    styleFitCoef: coefs.styleFit[style],
    distFitCoef: coefs.distFit[dist],
    surfaceFitCoef: coefs.surfaceFit[surface],
    usingStyleCoef: coefs.usingStyle[usingStyle],
  };
};

const initStatus = (
  uma: Uma,
  raceParams: RaceParams
): { rawStatus: Status; status: Status } => {
  const rawStatus = uma.status;
  const {
    motBonus,
    styleFitCoef,
    distFitCoef,
    surfaceFitCoef,
    usingStyleCoef,
  } = setCoefData(uma);
  const { statusCheck } = raceParams;

  const speedMutiplier = statusCheck.reduce(
    (total: number, curValue: StatusType) => {
      return (
        total +
        Math.min(Math.ceil((rawStatus[curValue] * motBonus) / 300), 4) * 0.05
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

const initUmaCond = (
  uma: Uma,
  raceParams: RaceParams,
  rawStatus: Status,
  status: Status
) => {
  const coefData = setCoefData(uma);
  const spCostCoef = setSpCostCoef(status);
  const v = setV(status, coefData, raceParams);

  return {
    skillActRate: setSkillActRate(rawStatus, coefData.motBonus),
    temptRate: setTemptRate(status),
    posKeepRate: setPosKeepRate(uma, status),
    spCostCoef,
    v,
    a: setA(status, coefData),
    spMax: setSpMax(status, coefData, raceParams),
    usingStyle: uma.usingStyle,
  };
};

export const initUmaRandCond = (temptRate: number): StrNumDict => {
  return {
    temptSection: setTemptSection(temptRate),
  };
};

export const initUma = (uma: Uma, raceParams: RaceParams): UmaParams => {
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
    posKeepRate,
    usingStyle,
    temptSection,
  };
};
