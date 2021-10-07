// top module
import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';

// redux store
import * as actions from './racesSlice';
import { fetchInitStateAsync } from './racesSlice';
import { RootState } from '../../store';

// child components
import Container from './Container';
import Todo from './Todo';

// others
import { getStorage, getSingleStorage } from '../../functions/LocalStorage';

const RacesIndex = (): JSX.Element => {
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

export default RacesIndex;
