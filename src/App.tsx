import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
// import BaseForm from './components/BaseForm'

import Container from '@material-ui/core/Container';

import RaceSimulator from './features/raceSimulator/views/index';

import './styles.css';

const App = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <Container
        maxWidth="lg"
        fixed
        className="App"
        data-theme={darkMode ? 'dark' : 'light'}
      >
        <Switch>
          <Route exact path="/" render={() => <RaceSimulator />} />
          <div>d654654645654764575668756</div>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
