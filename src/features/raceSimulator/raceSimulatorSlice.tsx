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
      while (!race.checkAllGoal()) {
        frameCount += 1;
        race.progressRace();
        console.log(frameCount, race.getUmaStateList());
      }

      // const { umaStateResults } = state;
      // const umaList = action.payload.map((uma: UmaOption) => {
      //   const { umaName } = uma;
      //   umaStateResults[umaName] = [];
      //   const umaObj = new Uma(uma);
      //   race.setUmaReady(umaObj.getState());
      //   return umaObj;
      // });
      // let umaStateList = umaList.map((uma: UmaMethods) => uma.getState());
      // let frameCount = 0;

      // while (umaStateList.length !== 0 && frameCount < 1000) {
      //   race.progressRace(umaStateList);
      //   const raceState = race.getRaceState();
      //   umaStateList = umaList
      //     .filter((uma: UmaMethods) => {
      //       if (!uma.checkGoal()) {
      //         state.raceResult.umaFrameResultList.push(uma.getFrameResult());
      //         return true;
      //       }
      //       return false;
      //     })
      //     .map((uma: any) => {
      //       uma.move(raceState);
      //       const umaState = uma.getState();
      //       umaStateResults[uma.umaName].push(umaState);
      //       return umaState;
      //     });
      //   frameCount += 1;
      // }
    },
  },
});

export const { saveRace, simulateStart } = raceSimulatorSlice.actions;

export default raceSimulatorSlice.reducer;
