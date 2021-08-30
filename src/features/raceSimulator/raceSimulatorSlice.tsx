import { createSlice } from '@reduxjs/toolkit';

import { initRace } from './functions/InitRace';
import { initUma } from './functions/InitUma';

import { RaceOption } from './types';

interface RaceSimulatorState {
  umaList: any;
  raceOption: RaceOption;
}

const initialState: RaceSimulatorState = {
  umaList: [],
  raceOption: {
    raceTrackId: '10009',
    raceId: '10906',
    groundCond: '1',
    weather: '1',
    season: '1',
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
    },
    reset: (state) => initialState,
  },
});

export const { saveRace, simulateStart, reset } = raceSimulatorSlice.actions;

export default raceSimulatorSlice.reducer;
