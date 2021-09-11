import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import localesReducer from './features/locales/localesSlice';
import raceSimulatorReducer from './features/raceSimulator/raceSimulatorSlice';
// import { apiSlice } from './features/api/apiSlice';

export const reducer = combineReducers({
  locales: localesReducer,
  raceSimulator: raceSimulatorReducer,
  // [apiSlice.reducerPath]: apiSlice.reducer,
});

const store = configureStore({
  reducer,
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof reducer>;
export default store;
