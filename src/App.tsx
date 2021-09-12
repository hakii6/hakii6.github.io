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
import * as LocalesActions from './features/locales/localesSlice';
import { RootState } from './store';

// child components
import RaceSimulator from './components/raceSimulator/index';
import NavBar from './components/NavBar';

const darkTheme: Theme = createTheme({
  palette: {
    type: 'dark',
    // background: {
    //   default: grey[900],
    // },
    primary: grey,
  },
  overrides: {
    MuiPaper: {
      root: {
        marginTop: 4 * 2,
      },
    },
  },
});

const lightTheme: Theme = createTheme({
  props: {},
  palette: {
    type: 'light',
  },
  overrides: {
    MuiPaper: {
      root: {
        marginTop: 4 * 2,
      },
    },
  },
});

const App = (): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();

  // state & selector
  const darkMode = useSelector((state: RootState) => state.locales.darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {/* error when {theme} only */}
      <CssBaseline />
      <Container maxWidth="lg">
        <NavBar />
        <Paper elevation={3}>
          <Router>
            <Switch>
              <Route exact path="/" render={() => <RaceSimulator />} />
            </Switch>
          </Router>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default App;

// useMemo & useCallback
// const theme = useMemo(() => createTheme({
//   palette: {
//     type: darkMode ? 'dark' : 'light',
//   },
// }), [darkMode]);
