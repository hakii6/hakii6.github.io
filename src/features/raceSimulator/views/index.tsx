// top module
import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

// UI components
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// redux store
import * as actions from '../raceSimulatorSlice';
import { fetchInitStateAsync } from '../raceSimulatorSlice';
import { RootState } from '../../../store';

// child components
import Container from './Container';
import Todo from './Todo';

// others
import { getStorage, getSingleStorage } from '../../../functions/LocalStorage';
import { UmaSetting, RaceOption } from '../types';

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));

const RaceSimulator = (): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  // state & selector
  const ready = useSelector((state: RootState) => state.raceSimulator.ready);

  // side effects: init data
  useEffect(() => {
    dispatch(fetchInitStateAsync());
  }, []);

  return (
    <>
      {ready && (
        <>
          <Container />
          <Todo />
        </>
      )}
    </>
  );
};

export default RaceSimulator;
