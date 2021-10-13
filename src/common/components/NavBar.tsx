// top module
import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useStyles from 'styles';

// UI components
import { Tabs, Tab } from '@mui/material';
import {
  Edit as EditIcon,
  DirectionsRun as DirectionsRunIcon,
} from '@mui/icons-material';

const NavBar = () => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  // state & selector
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event: any, newValue: number) => {
    setTabValue(newValue);
  };
  // const handleClick = (event: any) => {
  //   event.preventDefault();
  // };

  return (
    <>
      <Tabs
        variant="fullWidth"
        value={tabValue}
        onChange={handleChange}
        aria-label="navbar"
      >
        <Tab
          icon={<EditIcon />}
          label={t('馬娘設定')}
          // onClick={handleClick}
          href="/umaSettings"
        />
        <Tab
          icon={<DirectionsRunIcon />}
          label={t('比賽模擬')}
          // onClick={handleClick}
          href="/raceSimulator"
          // disabled
        />
      </Tabs>
    </>
  );
};

export default NavBar;
