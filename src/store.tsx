import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// import umasReducer from '../features/umas/umasSlice'
import raceSimulatorReducer from './features/raceSimulator/raceSimulatorSlice';
// import framesReducer from '../features/frames/framesSlice'

export const reducer = combineReducers({
  raceSimulator: raceSimulatorReducer,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof reducer>;
export default store;
