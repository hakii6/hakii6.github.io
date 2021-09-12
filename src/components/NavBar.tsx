// top module
import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

// UI components
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
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
} from '@material-ui/core';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import FlareIcon from '@material-ui/icons/Flare';

// redux store
import * as LocalesActions from '../features/locales/localesSlice';
import { RootState } from '../store';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  themeButton: {
    marginLeft: theme.spacing(2),
  },
}));

const NavBar = () => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();
  const trigger = useScrollTrigger();

  // state & selector
  const darkMode = useSelector((state: RootState) => state.locales.darkMode);
  const [locale, setLocale] = useState(i18n.language as string);

  // other
  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    i18n.changeLanguage(e.target.value as string);
    setLocale(e.target.value as string);
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
              color="primary"
              aria-label="dark"
              onClick={() => dispatch(LocalesActions.switchDarkMode())}
            >
              {darkMode ? <Brightness3Icon /> : <FlareIcon />}
            </Fab>
          </Toolbar>
        </AppBar>
      </Slide>
    </div>
  );
};

export default NavBar;
