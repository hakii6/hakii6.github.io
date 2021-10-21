// top module
import * as React from 'react';
import { useState, useEffect, useMemo } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

// UI components
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { CssBaseline, Container, Paper, Grid } from '@mui/material';

// child components
import UmaSettings from 'features/umaSettings';
import AppFrame from './components/AppFrame';
// import RaceSimulator from '@features/raceSimulator/views/RaceSimulator';

let theme = createTheme({
  typography: {
    fontSize: 18,
  },
});

theme = createTheme(theme, {
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme(theme, {
  palette: {
    mode: 'light',
  },
});

const App = (props: any) => {
  // common hooks
  const { t, i18n } = useTranslation();

  // state & selector
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <ThemeProvider theme={darkMode ? theme : lightTheme}>
      <CssBaseline />
      <AppFrame>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <UmaSettings />} />
            <Route exact path="/umaSettings" render={() => <UmaSettings />} />
            <Route
              exact
              path="/raceSimulator"
              render={() => <div>not yet...</div>}
            />
          </Switch>
        </BrowserRouter>
      </AppFrame>
    </ThemeProvider>

  );

/*  return (
      <CssBaseline />
      <Grid container>
        <Layout darkMode={darkMode} setDarkMode={setDarkMode} />
        <Paper>

        </Paper>
      </Grid>
  );*/
};
export default App;
