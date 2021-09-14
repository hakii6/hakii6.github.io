import { createSlice } from '@reduxjs/toolkit';

import { getSingleStorage } from '../../functions/LocalStorage';
import Uma, { UmaState } from './functions/Uma';
import Race, { RaceObject } from './functions/Race';
import { roundNumbers } from '../../functions/Common';

import { RaceOption, UmaOption } from './types';

interface RaceSimulatorState {
  umaDataList: UmaOption[];
  raceOption: RaceOption;
  raceObject: RaceObject | null;
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
  getSingleStorage('raceOption') === null
    ? defaultRaceOption
    : getSingleStorage('raceOption');

const initialState: RaceSimulatorState = {
  umaDataList: [],
  raceOption: initRaceOption as RaceOption,
  raceObject: null,
};

const raceSimulatorSlice = createSlice({
  name: 'raceSimulator',
  initialState,
  reducers: {
    saveRace: (state, action) => ({
      ...state,
      raceOption: action.payload,
    }),
    setUmaDataList: (state, action) => ({
      ...state,
      umaDataList: action.payload,
    }),
    simulateStart: (state) => {
      const race = new Race(state.raceOption, state.umaDataList);
      let frameCount = 0;
      while (!race.checkAllGoal() && frameCount < 2000) {
        frameCount += 1;
        race.progressRace();
      }
      state.raceObject = race;
    },
  },
});

export const { saveRace, simulateStart, setUmaDataList } =
  raceSimulatorSlice.actions;

export default raceSimulatorSlice.reducer;
