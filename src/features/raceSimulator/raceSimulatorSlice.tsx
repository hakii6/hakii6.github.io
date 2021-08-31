import { createSlice } from '@reduxjs/toolkit';

import { initRace } from './functions/InitRace';
import { initUma } from './functions/InitUma';
import { progressRace } from './functions/ProgressRace';

import { RaceOption, UmaState, Uma } from './types';

interface RaceSimulatorState {
  umaList: Uma[];
  raceOption: RaceOption;
}

const initUmaState: UmaState = {
  umaName: '',
  index: 0,
  pos: 0,
  momentSpeed: 3,
  unusedSp: -1,
  params: '',

  phase: -1,
  section: -1,
  targetSpeed: -1,
  speedDiff: -1,
  momentAcc: -1,
  avgSpeed: -1,
  spCost: -1,
  moveState: '',
  costState: '',
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
    raceTrackId: '10005',
    raceId: '10501',
    groundCond: '0',
    weather: '1',
    season: '3',
  },
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
      console.log(raceParams, umaParams);

      const umaFrames = [];
      const preFrame = {};
      let umaState = {
        ...initUmaState,
        umaName: umaParams.umaName,
        index: 0,
        pos: 0,
        momentSpeed: 3,
        unusedSp: umaParams.spMax,
        params: umaParams,
      };
      for (let i = 0; i < 100; i += 1) {
        umaState = progressRace(umaState, raceParams);
        console.log(umaState);
      }
    },
    reset: (state) => initialState,
  },
});

export const { saveRace, simulateStart, reset } = raceSimulatorSlice.actions;

export default raceSimulatorSlice.reducer;
