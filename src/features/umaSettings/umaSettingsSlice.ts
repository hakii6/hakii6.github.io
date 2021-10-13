// top module
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

// api
import {
  fetchUmaSettingsInitState,
  createUma,
  updateUma,
  saveRaceOption,
} from 'api';

// types
import { roundNumbers } from 'utils/Common';
import { RaceOption, UmaSetting, UmaState, RaceObject } from './types';

// common functions

interface UmaSettingsState {
  ready: boolean;
  umaSettingArray: UmaSetting[];
}

const initialState: UmaSettingsState = {
  ready: false,
  umaSettingArray: [],
};

const fetchInitStateAsync = createAsyncThunk(
  'umaSettings/fetchUmaSettingsInitStateStatus',
  async thunkAPI => {
    const response = await fetchUmaSettingsInitState();
    return response;
  },
);

const createUmaAsync = createAsyncThunk(
  'umaSettings/createUmaStatus',
  async (umaName: string, thunkAPI) => {
    const response = await createUma(umaName);
    return response;
  },
);

const updateUmaAsync = createAsyncThunk(
  'umaSettings/updateUmaStatus',
  async ([umaSetting, umaIndex]: [UmaSetting, number], thunkAPI) => {
    const response = await updateUma([umaSetting, umaIndex]);
    return response;
  },
);

const umaSettings = createSlice({
  name: 'umaSettings',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchInitStateAsync.fulfilled, (state, action) => {
        state.umaSettingArray = action.payload;
        state.ready = true;
      })
      .addCase(createUmaAsync.fulfilled, (state, action) => {
        state.umaSettingArray = action.payload;
      })
      .addCase(updateUmaAsync.fulfilled, (state, action) => {
        state.umaSettingArray = action.payload;
      });
    // .addCase(saveRaceOptionAsync.fulfilled, (state, action) => {
    //   state.raceOption = action.payload;
    //   races.caseReducers.simulateStart(state);
    // });
  },
});

// export const { simulateStart, selectRaceUma } = umaSettings.actions;

export default umaSettings.reducer;
