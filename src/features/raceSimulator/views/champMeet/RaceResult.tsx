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

// redux store
import * as raceSimulatorActions from '../../raceSimulatorSlice';
import { RootState } from '../../../../store';

// child components
import UmaChart from './UmaChart';
import RaceChart from './RaceChart';

// other
import { roundNumbers } from '../../../../functions/Common';
import { UmaClass } from '../../functions/Uma';
import { RaceObject } from '../../functions/Race';

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
  const [tabValue, setTabValue] = useState<number>(0);
  const [frameIndex, setFrameIndex] = useState<number>(0);
  const [moveSpeed, setMoveSpeed] = useState<number>(15);
  const raceObject = useSelector(
    (state: RootState) => state.raceSimulator.raceObject
  );
  const umaObjectList = useMemo(() => {
    if (raceObject !== null) {
      return raceObject.getUmaObjectList();
    }
    return [];
  }, [raceObject]);

  const chartObj = useMemo(() => {
    if (raceObject === null) {
      return <></>;
    }
    if (tabValue === umaObjectList.length) {
      return <RaceChart raceObject={raceObject} />;
    }
    return <UmaChart umaObject={umaObjectList[tabValue]} />;
  }, [tabValue]);
  const raceParams = useMemo(
    () => (raceObject !== null ? raceObject.getRaceParams() : {}),
    [raceObject]
  );

  const intervalRef = useRef<any>(null);

  const handleTabChange = (
    event: React.ChangeEvent<unknown>,
    newTabValue: number
  ) => {
    setTabValue(newTabValue);
  };
  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 15,
      label: '1',
    },
    {
      value: 30,
      label: '2',
    },
    {
      value: 45,
      label: '3',
    },
    {
      value: 60,
      label: '4',
    },
    {
      value: 75,
      label: '5',
    },
  ];
  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          centered
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="uma tabs"
          className={classes.tabs}
        >
          {umaObjectList.map((umaObject: UmaClass, index: number) => (
            <Tab label={umaObject.getUmaName()} />
          ))}
          <Tab label="總結果" />
        </Tabs>
      </AppBar>
      {chartObj}
    </>
  );
};

export default RaceResult;
