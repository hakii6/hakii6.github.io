import { createSlice } from '@reduxjs/toolkit';

import Uma, { UmaState } from './functions/Uma';
import Race from './functions/Race';
import { roundNumbers } from './functions/Common';
import { getStorageObject } from './functions/LocalStorage';

import { RaceOption, RaceParams, UmaOption } from './types';

interface RaceSimulatorState {
  umaList: UmaOption[];
  raceOption: RaceOption;
  umaStateResults: Record<string, any>;
  raceResult: {
    raceState: UmaState[][];
    umaFrameResultList: UmaState[][];
  };
}

// const initParams:
const defaultRaceOption: RaceOption = {
  raceTrackId: '10009',
  raceId: '10903',
  groundCond: '0',
  weather: '1',
  season: '3',
};
const initRaceOption =
  getStorageObject('raceOption') === null
    ? defaultRaceOption
    : getStorageObject('raceOption');

const initialState: RaceSimulatorState = {
  umaList: [],
  raceOption: initRaceOption as RaceOption,
  umaStateResults: {},
  raceResult: {
    raceState: [],
    umaFrameResultList: [],
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
      const race = new Race(state.raceOption, action.payload);
      let frameCount = 0;
      while (!race.checkAllGoal() && frameCount < 1600) {
        frameCount += 1;
        race.progressRace();
      }
      state.umaStateResults = race.getRaceResult();
    },
  },
});

export const { saveRace, simulateStart } = raceSimulatorSlice.actions;

export default raceSimulatorSlice.reducer;
