// top module
import React, { useState, useEffect, useMemo } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

// UI components
import {
  ThemeProvider,
  createTheme,
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import { CssBaseline, Container, Paper } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

// redux store
import { RootState } from './store';

// child components
import RaceSimulator from './features/raceSimulator/views/index';
import Layout from './common/layout/Layout';
import Races from './features/races/Races';

const darkTheme: Theme = createTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    fontSize: 18,
  },
});

const lightTheme: Theme = createTheme({
  palette: {
    type: 'light',
  },
  typography: {
    fontSize: 18,
  },
});

const App = (): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  // const classes = useStyles();

  // state & selector
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Races />} />
          </Switch>
        </Router>
      </Layout>
    </ThemeProvider>
  );
};

export default App;

// // import i18n from '../../i18n';
// // redux is not supporting suspense (i18n.changeLanguage) yet
// const initialState = {
//   // locale: i18n.language as string,
//   darkMode: localStorage.getItem('darkMode') !== 'false',
// };

// const localesSlice = createSlice({
//   name: 'locales',
//   initialState,
//   reducers: {
//     // changeLocale: (state, action) => {
//     //   i18n.changeLanguage(action.payload as string);
//     //   state.locale = action.payload;
//     // },
//     switchDarkMode: (state) => {
//       state.darkMode = !state.darkMode;
//     },
//   },
