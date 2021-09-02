import { createSlice } from '@reduxjs/toolkit';

import { initRace } from './functions/InitRace';
import { initUma } from './functions/InitUma';
import { progressRace } from './functions/ProgressRace';
import { roundNumbers } from './functions/Common';

import { RaceOption, UmaState, Uma, UmaParams } from './types';

interface RaceSimulatorState {
  umaList: Uma[];
  raceOption: RaceOption;
  umaStateList: UmaState[];
}

// const initParams:

const initialState: RaceSimulatorState = {
  umaList: [],
  raceOption: {
    raceTrackId: '10009',
    raceId: '10903',
    groundCond: '0',
    weather: '1',
    season: '3',
  },
  umaStateList: [],
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

      const initUmaStateList = action.payload.map((uma: Uma) =>
        initUma(uma, raceParams)
      );

      const raceFrames = [];
      let umaStateList = [...initUmaStateList];
      for (let i = 0; i < 100; i += 1) {
        const frameResult = progressRace(umaStateList);
        umaStateList = frameResult.umaStateList;
      }
      state.umaStateList = umaStateList;
    },
    reset: (state) => initialState,
  },
});

export const { saveRace, simulateStart, reset } = raceSimulatorSlice.actions;

export default raceSimulatorSlice.reducer;
