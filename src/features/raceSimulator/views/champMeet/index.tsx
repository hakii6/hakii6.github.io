import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import RaceForm from './RaceForm';
import RaceResult from './RaceResult';

import * as raceSimulatorActions from '../../raceSimulatorSlice';

import { RootState } from '../../../../store';
import { Uma } from '../../types';

import { generateRandomNumberArray } from '../../functions/Common';

const defaultUma: Uma = {
  umaName: '',
  status: {
    speed: 1200,
    stamina: 600,
    power: 1200,
    guts: 300,
    wisdom: 300,
  },
  usingStyle: '1',
  fit: {
    surface: 'A',
    dist: 'A',
    style: 'A',
  },
  motivation: '0',
};

const ChampMeet = (): JSX.Element => {
  const raceOption = useSelector(
    (state: RootState) => state.raceSimulator.raceOption
  );
  const dispatch = useDispatch();

  const simulateStart = (): void => {
    const umas = [defaultUma];
    umas[0] = {
      ...umas[0],
      // randomNumbers: generateRandomNumberArray(1000, 100),
    };
    dispatch(raceSimulatorActions.simulateStart(umas));
  };
  return (
    <>
      <RaceForm />

      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        <Button onClick={() => simulateStart()} disabled={raceOption === null}>
          start
        </Button>
      </ButtonGroup>

      <RaceResult />
    </>
  );
};

export default ChampMeet;
