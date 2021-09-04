// top module
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

// UI components
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

// redux store
import * as raceSimulatorActions from '../../raceSimulatorSlice';
import { RootState } from '../../../../store';

// child components
import RaceForm from './RaceForm';
import RaceResult from './RaceResult';

// other
import { Uma } from '../../types';
import { generateRandomNumberArray } from '../../functions/Common';

const defaultUma: Uma = {
  umaName: 'aaaaaa',
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
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const raceOption = useSelector(
    (state: RootState) => state.raceSimulator.raceOption
  );

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
          {t('start')}
        </Button>
      </ButtonGroup>
      <RaceResult />
    </>
  );
};

export default ChampMeet;
