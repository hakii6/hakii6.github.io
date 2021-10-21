// top module
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface PreferenceState {
  darkMode: boolean;

  disablePermanent: boolean;
  mobileOpen: boolean;
  onClose: boolean;
  onOpen: boolean;
}

const initialState: PreferenceState = {
  darkMode: true,

  disablePermanent: false,
  mobileOpen: false,
  onClose: false,
  onOpen: false,
};

const preference = createSlice({
  name: 'preference',
  initialState,
  reducers: {},
});

// export const { simulateStart, selectRaceUma } = umaSettings.actions;

export default preference.reducer;
