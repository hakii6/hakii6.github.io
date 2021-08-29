import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
  saveRace,
  addUma,
  loadUma,
  saveUma,
  deleteUma,
  simulateStart,
  reset,
} = raceSimulatorSlice.actions;

export default raceSimulatorSlice.reducer;
