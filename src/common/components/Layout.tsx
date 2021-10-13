// top module
import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useStyles from 'styles';

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
  Tabs,
  Tab,
} from '@mui/material';
import {
  Brightness3 as Brightness3Icon,
  Flare as FlareIcon,
} from '@mui/icons-material';

import NavBar from './NavBar';

interface Props {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Layout = ({ darkMode, setDarkMode }: Props) => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();
  const trigger = useScrollTrigger();

  // state & selector
  const [locale, setLocale] = useState(i18n.language as string);

  // other React.ChangeEvent<{ value: unknown }
  const handleChange = (e: any) => {
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
    <div>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar color="default" position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              賽馬娘測試
            </Typography>

            <NavBar />

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
    </div>
  );
};

export default Layout;

