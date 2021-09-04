import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import localesReducer from './features/locales/localesSlice';
import raceSimulatorReducer from './features/raceSimulator/raceSimulatorSlice';
// import framesReducer from '../features/frames/framesSlice'

export const reducer = combineReducers({
  locales: localesReducer,
  raceSimulator: raceSimulatorReducer,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof reducer>;
export default store;
