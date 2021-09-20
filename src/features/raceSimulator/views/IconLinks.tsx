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

// others
import { UmaSetting, RaceOption } from '../types';

interface Props {
  setSelectedForm: (arg1: string) => void;
}

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

const IconLinks = ({ setSelectedForm }: Props): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  // state & selector
  const umaDataList = useSelector(
    (state: RootState) => state.raceSimulator.umaDataList
  );

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
            disabled={!umaDataList.length}
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
            disabled={!umaDataList.length}
            onClick={() => setSelectedForm('ChampMeet')}
            variant="extended"
          >
            <DirectionsRunIcon className={classes.extendedIcon} />
            設定出賽
          </Fab>
        </Grid>
      </Grid>
    </>
  );
};

export default IconLinks;
