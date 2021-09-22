// top module
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

// api
import {
  fetchInitState,
  createUma,
  updateUma,
  saveRaceOption,
} from '../../api/api';

// default values
import { defaultRaceOption, defaultUma, defaultUma2 } from './defaultValues';

// objects
import Uma from './objects/Uma';
import Race from './objects/Race';

// types
import { UmaState, RaceObject } from './objects/objectTypes';
import { RaceOption, UmaSetting } from './types';

// common functions
import { roundNumbers } from '../../functions/Common';

interface RaceSimulatorState {
  ready: boolean;
  umaDataList: UmaSetting[];
  raceUmaList: UmaSetting[];
  raceOption: RaceOption;
  raceObject: RaceObject | null;
}

const initialState: RaceSimulatorState = {
  ready: false,
  umaDataList: [],
  raceUmaList: [],
  raceOption: defaultRaceOption,
  raceObject: null,
};

export const fetchInitStateAsync = createAsyncThunk(
  'raceSimulator/fetchInitStateStatus',
  async (thunkAPI) => {
    const response = await fetchInitState();
    return response;
  }
);

export const createUmaAsync = createAsyncThunk(
  'raceSimulator/createUmaStatus',
  async (umaName: string, thunkAPI) => {
    const response = await createUma(umaName);
    return response;
  }
);

export const updateUmaAsync = createAsyncThunk(
  'raceSimulator/updateUmaStatus',
  async ([umaSetting, umaIndex]: [UmaSetting, number], thunkAPI) => {
    const response = await updateUma([umaSetting, umaIndex]);
    return response;
  }
);

export const saveRaceOptionAsync = createAsyncThunk(
  'raceSimulator/saveRaceOptionStatus',
  async (raceOption: RaceOption, thunkAPI) => {
    const response = await saveRaceOption(raceOption);
    return response;
  }
);

const raceSimulatorSlice = createSlice({
  name: 'raceSimulator',
  initialState,
  reducers: {
    selectRaceUma: {
      reducer: (state, action: PayloadAction<number[]>) => {
        state.raceUmaList = action.payload.map(
          (value: number, index: number) => state.umaDataList[value]
        );
        state.raceUmaList.push(defaultUma, defaultUma2);
      },
      prepare: (text: boolean[]) => {
        const newPayload: number[] = [];
        text.forEach((value: boolean, index: number) => {
          if (value) {
            newPayload.push(index);
          }
        });
        return {
          payload: newPayload,
        };
      },
    },
    simulateStart: (state) => {
      const race = new Race(state.raceOption, state.raceUmaList);
      let frameCount = 0;
      while (
        race.raceState.goalCount !== state.raceUmaList.length &&
        frameCount < 2000
      ) {
        frameCount += 1;
        race.progressRace();
      }
      state.raceObject = race;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitStateAsync.fulfilled, (state, action) => {
        const [raceOption, umaDataList] = action.payload;
        state.umaDataList = umaDataList;
        state.raceOption = raceOption ? raceOption : defaultRaceOption;
        state.ready = true;
      })
      .addCase(createUmaAsync.fulfilled, (state, action) => {
        state.umaDataList = action.payload;
      })
      .addCase(updateUmaAsync.fulfilled, (state, action) => {
        state.umaDataList = action.payload;
      })
      .addCase(saveRaceOptionAsync.fulfilled, (state, action) => {
        state.raceOption = action.payload;
        raceSimulatorSlice.caseReducers.simulateStart(state);
      });
  },
});

export const { simulateStart, selectRaceUma } = raceSimulatorSlice.actions;

export default raceSimulatorSlice.reducer;
