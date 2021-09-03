import {
  Uma,
  RaceParams,
  Status,
  StatusType,
  UmaParams,
  UmaState,
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
import { roundNumbers } from './Common';

const courseData: Record<string, any> = CourseData;
const constants: Record<string, any> = Constants;
const coefs: Record<string, any> = Coefs;

const { framesPerSec, frameLength, statusType } = constants;

const setCoefData = (
  umaParams: UmaParams,
  raceParams: RaceParams
): UmaParams => {
  const { motivation, usingStyle, fit } = umaParams;
  const { style, dist, surface } = fit;
  return {
    ...umaParams,
    coefData: {
      motBonus: coefs.motivation[motivation],
      styleFitCoef: coefs.styleFit[style],
      distFitCoef: coefs.distFit[dist],
      surfaceFitCoef: coefs.surfaceFit[surface],
      usingStyleCoef: coefs.usingStyle[usingStyle],
    },
  };
};

const setStatus = (umaParams: UmaParams, raceParams: RaceParams): UmaParams => {
  const { rawStatus, coefData } = umaParams;
  const {
    motBonus,
    styleFitCoef,
    distFitCoef,
    surfaceFitCoef,
    usingStyleCoef,
  } = coefData!;
  const { statusCheck } = raceParams;
  const speedMutiplier = statusCheck.reduce(
    (total: number, curValue: StatusType) => {
      return (
        total +
        Math.min(Math.ceil((rawStatus![curValue] * motBonus) / 300), 4) * 0.05
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
    speed:
      rawStatus!.speed * motBonus * speedMutiplier +
      raceParams.surfaceConstant.speed +
      passiveSkillEffect.speed,
    stamina: rawStatus!.stamina * motBonus + passiveSkillEffect.stamina,
    power:
      rawStatus!.power * motBonus +
      raceParams.surfaceConstant.power +
      passiveSkillEffect.power,
    guts: rawStatus!.guts * motBonus + passiveSkillEffect.guts,
    wisdom:
      rawStatus!.wisdom * motBonus * styleFitCoef.wisdom +
      passiveSkillEffect.wisdom,
  };

  return { ...umaParams, status: roundNumbers(status) };
};

const setUmaCond = (
  umaParams: UmaParams,
  raceParams: RaceParams
): UmaParams => {
  const setUmaCondFuncList = [
    setSpCostCoef,
    setV,
    setSkillActRate,
    setTemptRate,
    setPosKeepRate,
    setA,
    setSpMax,
    setTemptSection,
  ];
  const newUmaParams = setUmaCondFuncList.reduce((prevVal, curFunc) => {
    return curFunc(prevVal, raceParams);
  }, umaParams);

  return {
    ...umaParams,
    ...newUmaParams,
  };
};

const setUmaParams = (uma: Uma, raceParams: RaceParams): UmaParams => {
  const { status, motivation, fit, umaName, usingStyle } = uma;
  const umaParams = {
    umaName,
    rawStatus: status,
    status,
    skillActRate: -1,
    temptRate: -1,
    spMax: -1,
    motivation,
    fit,
    posKeepRate: -1,
    usingStyle,
    temptSection: -2,
  };
  const umaParamsFuncList = [setCoefData, setStatus, setUmaCond];
  const newUmaParams = umaParamsFuncList.reduce<UmaParams>(
    (prevVal, curFunc) => curFunc(prevVal, raceParams),
    umaParams
  );

  return newUmaParams;
};

export const initUmaState = (
  uma: Uma,
  index: number,
  raceParams: RaceParams
): UmaState => {
  const umaParams = roundNumbers({ ...setUmaParams(uma, raceParams) });
  const initUmaFrame = {
    pos: 0,
    momentSpeed: 3,
    sp: umaParams.spMax,
  };

  const umaMomentState = {
    moveState: 'startdash',
    costState: 'normal',
    temptCond: {
      temptCount: 0,
      temptLast: 0,
      ifTempt: false,
    },
    posKeeping: true,
    phase: 0,
    section: 0,
    slopeType: 'normal',
    slopeEffect: 0,
    posKeepCoef: 1,
    skillEffect: 0,
  };

  const frameDetails = {
    startSpeed: -1,
    endSpeed: -1,
    targetSpeed: -1,
    avgSpeed: -1,
    speedDiff: -1,
    totalAcc: -1,
    momentAcc: -1,
    spCost: -1,
  };
  const umaState = {
    frameIndex: 0,
    umaIndex: index,
    order: index + 1,

    momentFrame: initUmaFrame,
    nextFrame: initUmaFrame,

    frameDetails,
    momentState: umaMomentState,

    umaParams,
    raceParams,
  };
  return umaState;
};

export default initUmaState;
