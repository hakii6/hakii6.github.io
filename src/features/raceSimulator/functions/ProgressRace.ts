import { RaceParams, UmaState, FunctionsGroup, RaceFunctions } from '../types';

import getRaceFunctions from './RaceFunctions';

const setMomentUmaState = (umaState: UmaState): UmaState => {
  const [preMoveFuncList, afterMoveFuncList] = getRaceFunctions();
  const newUmaState = { ...umaState };

  preMoveFuncList.forEach((moveFunc: any) => moveFunc(newUmaState));
  afterMoveFuncList.forEach((moveFunc: any) => moveFunc(newUmaState));

  return newUmaState;
};

const setNextUmaState = (umaState: UmaState): UmaState => {
  const {
    nextUnusedSp: unusedSp,
    nextSpeed: momentSpeed,
    nextPos: pos,
  } = umaState;
  const nextUmaState = {
    ...umaState,
    unusedSp,
    momentSpeed,
    pos,
  };

  return nextUmaState;
};

export const progressRace = (
  umaStateList: UmaState[],
  frameIndex: number
): any => {
  const newUmaStateList = umaStateList.map((umaState) =>
    setMomentUmaState(umaState)
  );
  const frameResult = { ...newUmaStateList };
  const nextUmaStateList = newUmaStateList.map((preUmaState) => ({
    ...setNextUmaState(preUmaState),
    frameIndex,
  }));
  return nextUmaStateList;
  // const raceFunctions = setRaceFunctions(raceParams);

  // const frameResult = umaMove(uma, raceFunctions);
  // return frameResult.nextUma;
};

export default progressRace;
