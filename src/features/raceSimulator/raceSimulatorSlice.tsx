import { createSlice } from '@reduxjs/toolkit';

import { getSingleStorage } from '../../functions/LocalStorage';
import Uma, { UmaState } from './functions/Uma';
import Race, { RaceObject } from './functions/Race';
import { roundNumbers } from '../../functions/Common';

import { RaceOption, UmaOption } from './types';

interface RaceSimulatorState {
  umaDataList: UmaOption[];
  raceUmaList: UmaOption[];
  raceOption: RaceOption;
  raceObject: RaceObject | null;
}

const defaultRaceOption: RaceOption = {
  raceTrackId: '10009',
  raceId: '10903',
  groundCond: '0',
  weather: '1',
  season: '3',
};
const defaultUma: UmaOption = {
  umaName: '啾星雲',
  status: {
    speed: 1200,
    stamina: 600,
    power: 901,
    guts: 300,
    wisdom: 1200,
  },
  usingStyle: '1',
  fit: {
    surface: 'A',
    dist: 'S',
    style: 'S',
  },
  motivation: '0',
};
const defaultUma2: UmaOption = {
  umaName: 'chu星雲',
  status: {
    speed: 1200,
    stamina: 600,
    power: 901,
    guts: 300,
    wisdom: 1200,
  },
  usingStyle: '1',
  fit: {
    surface: 'A',
    dist: 'S',
    style: 'S',
  },
  motivation: '0',
};

const initialState: RaceSimulatorState = {
  umaDataList: [],
  raceUmaList: [],
  raceOption: defaultRaceOption,
  raceObject: null,
};

const raceSimulatorSlice = createSlice({
  name: 'raceSimulator',
  initialState,
  reducers: {
    loadUmaDataList: (state, action) => {
      state.umaDataList = action.payload;
    },
    createUma: (state, action) => {
      state.umaDataList = state.umaDataList.concat(action.payload);
    },
    updateUma: (state, action) => {
      const { umaIndex, umaData } = action.payload;
      state.umaDataList[umaIndex] = umaData;
    },
    selectRaceUma: (state, action) => {
      state.raceUmaList = state.umaDataList
        .filter((umaData: UmaOption, index: number) => action.payload[index])
        .concat(defaultUma, defaultUma2);
    },
    saveRaceOption: (state, action) => {
      state.raceOption = action.payload;
    },
    simulateStart: (state) => {
      const race = new Race(state.raceOption, state.raceUmaList);
      let frameCount = 0;
      while (!race.checkAllGoal() && frameCount < 2000) {
        frameCount += 1;
        race.progressRace();
      }
      state.raceObject = race;
    },
  },
});

export const {
  saveRaceOption,
  // loadRaceOption,
  simulateStart,
  loadUmaDataList,
  createUma,
  updateUma,
  selectRaceUma,
} = raceSimulatorSlice.actions;

export default raceSimulatorSlice.reducer;
