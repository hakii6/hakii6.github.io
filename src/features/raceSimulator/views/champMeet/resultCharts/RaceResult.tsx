// top module
import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from 'react';
import { Line, Chart, Scatter } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

// UI components
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Button,
  Slider,
  Typography,
  AppBar,
  Tabs,
  Tab,
} from '@material-ui/core';

// child components
import UmaChart from './UmaChart';
import RaceChart from './RaceChart';

// redux store
import * as raceSimulatorActions from '../../../raceSimulatorSlice';
import { RootState } from '../../../../../store';

// other
import { roundNumbers } from '../../../../../functions/Common';
import { UmaObject, RaceObject, UmaState } from '../../../objects/objectTypes';
import { StatusType } from '../../../types';
interface Props {
  raceObject: RaceObject;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    tabs: {
      display: 'flex',
      margin: theme.spacing(1),
      centered: true,
    },
  })
);

const RaceResult = (): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  // state & selector
  const raceObject = useSelector(
    (state: RootState) => state.raceSimulator.raceObject
  );
  const [tabValue, setTabValue] = useState<number>(0);

  // const umaObjectList = useMemo(() => {
  //   if (raceObject !== null) {
  //     return raceObject.getUmaObjectList();
  //   }
  //   return [];
  // }, [raceObject]);

  // const chartObj = useMemo(() => {
  //   if (raceObject === null) {
  //     return <></>;
  //   }
  //   if (tabValue === umaObjectList.length) {
  //     return <RaceChart raceObject={raceObject} />;
  //   }
  //   return <UmaChart umaObject={umaObjectList[tabValue]} />;
  // }, [tabValue]);
  // const raceParams = useMemo(
  //   () => (raceObject !== null ? raceObject.getRaceParams() : {}),
  //   [raceObject]
  // );

  const handleTabChange = (
    event: React.ChangeEvent<unknown>,
    newTabValue: number
  ) => {
    setTabValue(newTabValue);
  };

  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="uma tabs"
          className={classes.tabs}
        >
          <Tab label="總結果" />
        </Tabs>
      </AppBar>
    </>
  );
};

export default RaceResult;

// {umaObjectList.map((umaObject: UmaObject, index: number) => (
//   <Tab key={umaObject.getName()} label={umaObject.getName()} />
// ))}
