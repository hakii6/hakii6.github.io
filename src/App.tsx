import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// import { styled } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

import RaceSimulator from './features/raceSimulator/views/index';

// import './styles.css';

// const theme = createTheme();
const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

const App = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container
          maxWidth="lg"
          fixed
          className="App"
          // data-theme={darkMode ? 'dark' : 'light'}
        >
          <Switch>
            <Route exact path="/" render={() => <RaceSimulator />} />
            <div>d654654645654764575668756</div>
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
