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
import RaceResultMode2 from './RaceResultMode2';

// other
import { UmaOption } from '../../types';
import { generateRandomNumberArray } from '../../functions/Common';

const defaultUma: UmaOption = {
  umaName: '預設',
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

// const defaultUma2: UmaOption = {
//   umaName: '天劍星雲',
//   status: {
//     speed: 1198,
//     stamina: 824,
//     power: 916,
//     guts: 399,
//     wisdom: 563,
//   },
//   usingStyle: '1',
//   fit: {
//     surface: 'A',
//     dist: 'A',
//     style: 'A',
//   },
//   motivation: '0',
// };

// const defaultUma3: UmaOption = {
//   umaName: '行飛女帝',
//   status: {
//     speed: 1150,
//     stamina: 844,
//     power: 1168,
//     guts: 470,
//     wisdom: 337,
//   },
//   usingStyle: '2',
//   fit: {
//     surface: 'A',
//     dist: 'S',
//     style: 'A',
//   },
//   motivation: '0',
// };

// const defaultUma4: UmaOption = {
//   umaName: '123123',
//   status: {
//     speed: 150,
//     stamina: 1,
//     power: 1,
//     guts: 150,
//     wisdom: 150,
//   },
//   usingStyle: '2',
//   fit: {
//     surface: 'A',
//     dist: 'S',
//     style: 'A',
//   },
//   motivation: '0',
// };
const ChampMeet = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const raceOption = useSelector(
    (state: RootState) => state.raceSimulator.raceOption
  );

  const simulateStart = (): void => {
    const umas: UmaOption[] = [defaultUma];
    dispatch(raceSimulatorActions.simulateStart(umas));
  };
  return (
    <>
      {/*      <RaceForm />
       */}
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        <Button onClick={() => simulateStart()} disabled={raceOption === null}>
          {t('start')}
        </Button>
      </ButtonGroup>
      <RaceResultMode2 />
    </>
  );
};

export default ChampMeet;
