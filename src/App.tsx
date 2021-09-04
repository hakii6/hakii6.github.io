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
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import {
  CssBaseline,
  Container,
  Switch as MSwitch,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  Stepper,
  Step,
} from '@material-ui/core';

// redux store
import * as LocalesActions from './features/locales/localesSlice';
import { RootState } from './store';

// child components
import RaceSimulator from './features/raceSimulator/views/index';

const App = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.locales.darkMode);
  const [locale, setLocale] = useState(i18n.language as string);

  // useMemo & useCallback
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          type: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode]
  );

  // other
  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    i18n.changeLanguage(e.target.value as string);
    setLocale(e.target.value as string);
  };

  // side effect(useEffect): store darkMode or localeLang setting
  useEffect(() => {
    localStorage.setItem('i18nextLng', String(locale));
  }, [locale]);
  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  return (
    <ThemeProvider theme={{ ...theme }}>
      {/* error when {theme} only */}
      <CssBaseline />
      <Container maxWidth="lg" className="App">
        <FormControl>
          <Select
            name="locale"
            value={locale}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="ja">日文</MenuItem>
            <MenuItem value="zh-TW">中文</MenuItem>
          </Select>
        </FormControl>
        <Router>
          <MSwitch
            checked={darkMode}
            onChange={() => dispatch(LocalesActions.switchDarkMode())}
            color="primary"
            name="darkMode"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <Switch>
            <Route exact path="/" render={() => <RaceSimulator />} />
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  );
};

export default App;
