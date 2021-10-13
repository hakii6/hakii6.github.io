// top module
import * as React from 'react';
import { useState, useEffect, useMemo } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

// UI components
import { ThemeProvider, createTheme, Theme } from '@mui/material/styles';
import { CssBaseline, Container, Paper } from '@mui/material';
import grey from '@mui/material/colors/grey';

// child components
import UmaSettings from 'features/umaSettings';
import Layout from 'components/Layout';
// import RaceSimulator from '@features/raceSimulator/views/RaceSimulator';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontSize: 18,
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontSize: 18,
  },
});

const App = () => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  // const classes = useStyles();

  // state & selector
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Layout darkMode={darkMode} setDarkMode={setDarkMode} />
      <Paper>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <UmaSettings />} />
            <Route exact path="/umaSettings" render={() => <UmaSettings />} />
            <Route exact path="/raceSimulator" render={() => <div>not yet...</div>} />
          </Switch>
        </Router>
      </Paper>
    </ThemeProvider>
  );
};
export default App;

// // import i18n from '../../i18n';
// // redux is not supporting suspense (i18n.changeLanguage) yet
