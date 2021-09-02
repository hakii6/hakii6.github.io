import {
  Uma,
  RaceParams,
  Status,
  StatusType,
  JsonData,
  StrNumDict,
  StrDict,
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

const courseData: JsonData = CourseData;
const constants: JsonData = Constants;
const coefs: JsonData = Coefs;

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
    speed: (
      rawStatus!.speed * motBonus * speedMutiplier +
      raceParams.surfaceConstant.speed +
      passiveSkillEffect.speed
    ).round(),
    stamina: (
      rawStatus!.stamina * motBonus +
      passiveSkillEffect.stamina
    ).round(),
    power: (
      rawStatus!.power * motBonus +
      raceParams.surfaceConstant.power +
      passiveSkillEffect.power
    ).round(),
    guts: (rawStatus!.guts * motBonus + passiveSkillEffect.guts).round(),
    wisdom: (
      rawStatus!.wisdom * motBonus * styleFitCoef.wisdom +
      passiveSkillEffect.wisdom
    ).round(),
  };

  return { ...umaParams, status };
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

export const initUma = (uma: Uma, raceParams: RaceParams): UmaState => {
  const umaParams = setUmaParams(uma, raceParams);
  const newUmaParams = roundNumbers({ ...umaParams });

  const defaultUmaState = {
    umaName: umaParams.umaName,
    frameIndex: 0,
    index: 0,
    pos: 0,
    unusedSp: umaParams.spMax,
    moveState: 'startdash',
    costState: 'normal',
    momentSpeed: 3,
    phase: -1,
    section: -1,
    spCost: -1,
    targetSpeed: -1,
    speedDiff: -1,
    momentAcc: -1,
    avgSpeed: -1,
    nextSpeed: -1,
    nextPos: -1,
    nextUnusedSp: -1,
    slopeType: '',
    slopeEffect: -1,
    temptCond: {
      ifTempt: false,
      temptLast: 0,
      temptCount: 0,
    },
    raceParams,
    posKeeping: true,
  };
  const umaState = { ...defaultUmaState, umaParams };
  return umaState;
};

export default initUma;
