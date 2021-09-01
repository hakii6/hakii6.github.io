import { createSlice } from '@reduxjs/toolkit';

import { initRace } from './functions/InitRace';
import { initUma } from './functions/InitUma';
import { progressRace } from './functions/ProgressRace';
import { roundNumbers, mergeObjects } from './functions/Common';

import { RaceOption, UmaState, Uma, UmaParams } from './types';

interface RaceSimulatorState {
  umaList: Uma[];
  raceOption: RaceOption;
  umaStateArr: UmaState[];
}

// const initParams:

const initUmaState = {
  index: 0,
  pos: 0,
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
};

const initialState: RaceSimulatorState = {
  umaList: [],
  raceOption: {
    raceTrackId: '10009',
    raceId: '10903',
    groundCond: '0',
    weather: '1',
    season: '3',
  },
  umaStateArr: [],
};

const raceSimulatorSlice = createSlice({
  name: 'raceSimulator',
  initialState,
  reducers: {
    saveRace: (state, action) => ({
      ...state,
      raceOption: action.payload,
    }),
    simulateStart: (state, action) => {
      const raceParams = initRace(state.raceOption);
      const umaParams = initUma(action.payload[0], raceParams);

      const preFrame = {};

      const { umaName, spMax: unusedSp } = umaParams;
      const params = { ...umaParams };
      const paramsObj = {
        umaName,
        unusedSp,
        params,
      };
      let umaState = { ...initUmaState, ...paramsObj };
      const umaStateArr = [];
      for (let i = 0; i < 100; i += 1) {
        const umaStateResult = progressRace(umaState, raceParams);
        roundNumbers(umaStateResult);
        umaStateArr.push(umaStateResult);
        umaState = { ...umaStateResult };
      }
      state.umaStateArr = umaStateArr;
    },
    reset: (state) => initialState,
  },
});

export const { saveRace, simulateStart, reset } = raceSimulatorSlice.actions;

export default raceSimulatorSlice.reducer;
