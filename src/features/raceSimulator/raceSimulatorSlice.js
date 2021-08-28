import { createSlice } from '@reduxjs/toolkit';

const defaultUma = {
  umaName: '預設',
  status: {
    speed: 1140,
    stamina: 678,
    power: 657,
    guts: 436,
    wisdom: 955,
  },
  usingStyle: '1',
  fit: {
    surface: 'A',
    dist: 'S',
    style: 'A',
  },
  motivation: '1',
};

const umasSaved = (!localStorage.getItem('umasSaved')) ? [] : localStorage.getItem('umasSaved');

const initialState = {
  umaData: {},
  umasSaved,
  currentUma: defaultUma,
  raceOption: {
    raceTrackId: '10009',
    raceId: '10906',
    groundCond: '1',
    weather: '1',
    season: '1',
  },
};

console.log();
const raceSimulatorSlice = createSlice({
  name: 'raceSimulator',
  initialState,
  reducers: {
    addUma: (state, action) => {
      console.log(state, action);
    },
    loadUma: (state, action) => {
      console.log(state, action);
    },
    saveUma: (state, action) => {
      console.log(state, action);
    },
    deleteUma: (state, action) => {
      console.log(state, action);
    },
    simulateStart: (state, action) => {
      console.log(state, action);
    },
    reset: (state) => initialState,
  },
});

export const {
  addUma,
  loadUma,
  saveUma,
  deleteUma,
  simulateStart,
  reset,
} = raceSimulatorSlice.actions;

export default raceSimulatorSlice.reducer;
