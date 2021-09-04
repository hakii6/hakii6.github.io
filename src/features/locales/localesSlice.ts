import { createSlice } from '@reduxjs/toolkit';

import { createTheme } from '@material-ui/core/styles';

// import i18n from '../../i18n';
// redux is not supporting suspense (i18n.changeLanguage) yet
const initialState = {
  // locale: i18n.language as string,
  darkMode: localStorage.getItem('darkMode') !== 'false',
};

const localesSlice = createSlice({
  name: 'locales',
  initialState,
  reducers: {
    // changeLocale: (state, action) => {
    //   i18n.changeLanguage(action.payload as string);
    //   state.locale = action.payload;
    // },
    switchDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { switchDarkMode } = localesSlice.actions;

export default localesSlice.reducer;
