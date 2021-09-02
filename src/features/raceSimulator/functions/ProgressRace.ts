import { RaceParams, UmaState, FunctionsGroup, RaceFunctions } from '../types';

import getRaceFunctions from './RaceFunctions';

const setUmaStateThisFrame = (umaState: UmaState): UmaState => {
  const [preMoveFuncList, afterMoveFuncList] = getRaceFunctions();
  const newUmaState = { ...umaState };

  preMoveFuncList.forEach((moveFunc: any) => moveFunc(newUmaState));
  afterMoveFuncList.forEach((moveFunc: any) => moveFunc(newUmaState));

  return newUmaState;
};

export const progressRace = (umaStateList: UmaState[]): any => {
  const newUmaStateList = umaStateList.map((umaState) =>
    setUmaStateThisFrame(umaState)
  );
  return [];
  // const raceFunctions = setRaceFunctions(raceParams);

  // const frameResult = umaMove(uma, raceFunctions);
  // return frameResult.nextUma;
};

export default progressRace;
