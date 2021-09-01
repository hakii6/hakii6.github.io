import {
  Uma,
  RaceParams,
  UmaState,
  JsonData,
  StrNumDict,
  FunctionsGroup,
  StrDict,
  RaceFunctions,
} from '../types';

import Constants from '../constants/Constants';
import Coefs from '../constants/Coefs';
import CourseData from '../constants/CourseData.json';

import setRaceFunctions from './RaceFunctions';

const courseData: JsonData = CourseData;
const constants: JsonData = Constants;
const coefs: JsonData = Coefs;

const { framesPerSec, frameLength, statusType } = constants;

const setUmaMomentState = (
  uma: UmaState,
  momentStateFunctions: FunctionsGroup
): void => {
  const {
    setPos,
    setMoveState,
    setCostState,
    setSpCost,
    setTargetSpeed,
    setMomentAcc,
  } = momentStateFunctions;

  setPos(uma);
  setMoveState(uma);
  setCostState(uma);
  setTargetSpeed(uma);
  setSpCost(uma);
  setMomentAcc(uma);
};

const setUmaNextState = (
  uma: UmaState,
  nextStateFunctions: FunctionsGroup
): UmaState => {
  const { setNextSpeed, setNextUnusedSp, setNextPos } = nextStateFunctions;

  setNextSpeed(uma);
  setNextUnusedSp(uma);
  setNextPos(uma);

  return {
    ...uma,
    momentSpeed: uma.nextSpeed,
    pos: uma.nextPos,
    unusedSp: uma.nextUnusedSp,
  };
};

const umaMove = (
  preUma: UmaState,
  raceFunctions: RaceFunctions
): { uma: UmaState; nextUma: UmaState } => {
  const uma = { ...preUma };
  const { momentStateFunctions, nextStateFunctions } = raceFunctions;

  setUmaMomentState(uma, momentStateFunctions);

  const nextUma = setUmaNextState(uma, nextStateFunctions);
  return {
    uma,
    nextUma,
  };
};

export const progressRace = (
  uma: UmaState,
  raceParams: RaceParams
): UmaState => {
  const raceFunctions = setRaceFunctions(raceParams);

  const frameResult = umaMove(uma, raceFunctions);
  return frameResult.nextUma;
};

export default progressRace;
