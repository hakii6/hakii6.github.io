import { createSlice } from '@reduxjs/toolkit';

import Uma, { UmaMethods } from './functions/Uma';
import Race from './functions/Race';
import { roundNumbers } from './functions/Common';

import {
  RaceOption,
  RaceState,
  RaceParams,
  UmaState,
  Uma as UmaType,
  UmaParams,
} from './types';

interface RaceSimulatorState {
  umaList: Uma[];
  raceOption: RaceOption;
  umaStateList: UmaState[];
  raceResult: {
    raceState: UmaState[][];
    umaFrameResultList: UmaState[][];
  };
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
      const race = new Race(state.raceOption);
      Uma.setRaceParams(race.getRaceParams() as RaceParams);
      const umaList = action.payload.map((uma: UmaType) => {
        race.setUmaReady(uma.umaName);
        return new Uma(uma);
      });
      let umaStateList = umaList.map((uma: UmaMethods) => uma.getState());
      let frameCount = 0;

      while (umaStateList.length !== 0 && frameCount < 2000) {
        race.progressRace(umaStateList);
        const raceState = race.getRaceState();
        umaStateList = umaList
          .filter((uma: UmaMethods) => {
            if (!uma.checkGoal()) {
              state.raceResult.umaFrameResultList.push(uma.getFrameResult());
              return true;
            }
            return false;
          })
          .map((uma: UmaMethods) => {
            const umaState = uma.getState();
            uma.move(raceState);
            return umaState;
          });
        console.log(frameCount);
        frameCount += 1;
      }
      state.raceResult.raceState = race.getRaceResult();
    },
  },
});

export const { saveRace, simulateStart } = raceSimulatorSlice.actions;

export default raceSimulatorSlice.reducer;
