import {
  RaceParams,
  UmaState,
  UmaMomentState,
  UmaFrameDetails,
  UmaFrame,
  RaceState,
} from '../types';

import {
  umaMomentStateFuncList,
  umaFrameDetailsFuncList,
  umaNextFrameFuncList,
} from './RaceFunc';

type RaceFunc = (umaState: UmaState) => void;

const setUmaState = (umaState: UmaState): UmaState => {
  umaState.momentFrame = { ...umaState.nextFrame };
  umaMomentStateFuncList.forEach((setFunc: RaceFunc) => setFunc(umaState));
  umaFrameDetailsFuncList.forEach((setFunc: RaceFunc) => setFunc(umaState));
  umaNextFrameFuncList.forEach((setFunc: RaceFunc) => setFunc(umaState));
  return { ...umaState };
};

const setMomentResult = (raceState: RaceState): void => {
  // todo: algorithm fix
  let goalCount = 0;
  const newMomentResult = raceState.umaStateList.map((umaState: UmaState) => {
    if (umaState.nextFrame.pos === umaState.raceParams.dist) {
      goalCount += 1;
    }
    return {
      pos: umaState.nextFrame.pos,
      order: 1,
    };
  });
  newMomentResult.forEach(
    (value: { pos: number; order: number }, index: number) => {
      newMomentResult.forEach(
        (value2: { pos: number; order: number }, index2: number) => {
          if (index !== index2 && value.pos < value2.pos) {
            value.order += 1;
          }
        }
      );
    }
  );
  raceState.momentResult = [...newMomentResult];
  raceState.goalCount = goalCount;
};

export const progressRace = (raceState: RaceState): RaceState => {
  const { index: frameIndex, umaStateList } = raceState;
  raceState.umaStateList = umaStateList.map((umaState: UmaState) =>
    setUmaState(umaState)
  );

  setMomentResult(raceState);
  return raceState;
};

export default progressRace;
