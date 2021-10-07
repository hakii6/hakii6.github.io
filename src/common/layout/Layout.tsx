// top module
import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';

// UI components
import {
  AppBar,
  Toolbar,
  FormControl,
  Typography,
  Select,
  Switch,
  MenuItem,
  useScrollTrigger,
  Slide,
  Fab,
  Paper,
} from '@material-ui/core';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import FlareIcon from '@material-ui/icons/Flare';
import grey from '@material-ui/core/colors/grey';

// redux store
import { RootState } from '../../store';

interface Props {
  children: JSX.Element;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const NavBar = ({ children, darkMode, setDarkMode }: Props): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();
  const trigger = useScrollTrigger();

  // state & selector
  const [locale, setLocale] = useState(i18n.language as string);

  // other
  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    if (typeof e.target.value === 'string') {
      i18n.changeLanguage(e.target.value);
      setLocale(e.target.value);
    }
  };

  // side effect(useEffect): store darkMode or localeLang setting
  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);
  useEffect(() => {
    localStorage.setItem('i18nextLng', String(locale));
  }, [locale]);

  return (
    <div className={classes.root}>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar color="default" position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              賽馬娘測試
            </Typography>
            <FormControl>
              <Select
                name="locale"
                value={locale}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="zh-TW">中文</MenuItem>
                <MenuItem value="ja">日文</MenuItem>
              </Select>
            </FormControl>
            <Fab
              className={classes.themeButton}
              aria-label="dark"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Brightness3Icon /> : <FlareIcon />}
            </Fab>
          </Toolbar>
        </AppBar>
      </Slide>
      <Paper className={classes.paper}>
        { children }
      </Paper>

    </div>
  );
};

export default NavBar;
