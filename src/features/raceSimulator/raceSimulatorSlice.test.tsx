import reducer, { saveRace, simulateStart, reset } from './raceSimulatorSlice';

// import { initRace } from './functions/InitRace';
// import { initUma } from './functions/InitUma';
// import { progressRace } from './functions/ProgressRace';
// import { roundNumbers } from './functions/Common';

// import { RaceOption, UmaState, Uma, UmaParams } from './types';

const initialState = {
  umaList: [],
  raceOption: {
    raceTrackId: '10009',
    raceId: '10903',
    groundCond: '0',
    weather: '1',
    season: '3',
  },
  umaStateList: [],
  umaFrameResult: [],
  raceFrames: [],
};

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

test('should return the initial state', () => {
  const prevState = {};
  expect(reducer(prevState, reset())).toEqual(initialState);
});
