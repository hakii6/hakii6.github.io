// top module
import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

// UI components
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Fab, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';

// redux store
import * as raceSimulatorActions from '../raceSimulatorSlice';
import { RootState } from '../../../store';

// child components
import UmaForm from './umaForm/index';
import ChampMeet from './champMeet/index';
import AddUmaDialog from './AddUmaDialog';

// others
import { getStorage, getSingleStorage } from '../../../functions/LocalStorage';
import { UmaOption, RaceOption } from '../types';

const defaultRaceOption: RaceOption = {
  raceTrackId: '10009',
  raceId: '10903',
  groundCond: '0',
  weather: '1',
  season: '3',
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  gridItem: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    justifyContent: 'center',
    textAlign: 'center',
  },
  fab: {
    fontSize: 20,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const RaceSimulator = (): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  // state & selector
  const [selectedForm, setSelectedForm] = useState('');
  const umaDataList = useSelector(
    (state: RootState) => state.raceSimulator.umaDataList
  );

  const formObj = useMemo(() => {
    switch (selectedForm) {
      case 'AddUma':
        return (
          <AddUmaDialog
            selectedForm={selectedForm}
            setSelectedForm={setSelectedForm}
          />
        );
      case 'UmaForm':
        return <UmaForm />;
      case 'ChampMeet':
        return <ChampMeet />;
      default:
        return <div />;
    }
  }, [selectedForm]);

  // side effects: loads data in localStorage
  useEffect(() => {
    const storageData = getStorage('umaDataList') as UmaOption[];
    dispatch(raceSimulatorActions.loadUmaDataList(storageData));
  }, []);
  useEffect(() => {
    const storageData = getSingleStorage('raceOption') as RaceOption | null;
    if (storageData === null) {
      dispatch(raceSimulatorActions.saveRaceOption(defaultRaceOption));
    } else {
      dispatch(raceSimulatorActions.saveRaceOption(storageData));
    }
  }, []);

  return (
    <>
      <Grid container direction="row" className={classes.root}>
        <Grid item xs={4} className={classes.gridItem}>
          <Fab
            className={classes.fab}
            color="primary"
            aria-label="AddUma"
            onClick={() => setSelectedForm('AddUma')}
            variant="extended"
          >
            <AddIcon className={classes.extendedIcon} />
            新增馬娘
          </Fab>
        </Grid>
        <Grid item xs={4} className={classes.gridItem}>
          <Fab
            className={classes.fab}
            color="primary"
            aria-label="UmaForm"
            onClick={() => setSelectedForm('UmaForm')}
            disabled={umaDataList === null || umaDataList.length === 0}
            variant="extended"
          >
            <EditIcon className={classes.extendedIcon} />
            編輯馬娘
          </Fab>
        </Grid>
        <Grid item xs={4} className={classes.gridItem}>
          <Fab
            className={classes.fab}
            color="primary"
            aria-label="ChampMeet"
            disabled={umaDataList === null || umaDataList.length === 0}
            onClick={() => setSelectedForm('ChampMeet')}
            variant="extended"
          >
            <DirectionsRunIcon className={classes.extendedIcon} />
            設定出賽
          </Fab>
        </Grid>
      </Grid>
      {formObj}

      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>未實裝:</h1>
      <h2>完場結果回報</h2>
      <h2>加減速 上下坡展現</h2>
      <h2>下坡加速</h2>
      <h2>開技能使位置意識強行改變</h2>
      <h2>中掛時腳質改變</h2>
      <h2>賢隨機速度(目前直接取平均)</h2>
      <h2>内側移動補正</h2>
      <h2>技能</h2>
    </>
  );
};

export default RaceSimulator;
