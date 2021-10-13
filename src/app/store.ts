import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import umaSettingsReducer from 'features/umaSettings/umaSettingsSlice';
// import { apiSlice } from './features/api/apiSlice';

export const reducer = combineReducers({
  umaSettings: umaSettingsReducer,
  // [apiSlice.reducerPath]: apiSlice.reducer,
});

const store = configureStore({
  reducer,
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof reducer>;
export default store;
