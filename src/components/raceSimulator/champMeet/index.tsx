// top module
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

// UI components
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

// redux store
import * as raceSimulatorActions from '../../../features/raceSimulator/raceSimulatorSlice';
import { RootState } from '../../../store';

// child components
import SelectUma from './SelectUma';
import RaceForm from './RaceForm';
import RaceLineChart from './RaceLineChart';
// import RaceResultMode2 from './RaceResultMode2';

// other
import { UmaOption } from '../types';
// import { generateRandomNumberArray } from '../functions/Common';
import {
  getStorage,
  updateStorage,
  showStorage,
} from '../../../functions/LocalStorage';

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

const ChampMeet = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const [umaDataList, setUmaDataList] = useState<UmaOption[] | null>(null);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const raceOption = useSelector(
    (state: RootState) => state.raceSimulator.raceOption
  );
  const raceResult = useSelector(
    (state: RootState) => state.raceSimulator.raceResult
  );

  const simulateStart = (): void => {
    dispatch(raceSimulatorActions.simulateStart());
  };

  useEffect(() => {
    const storageList = getStorage('umaDataList') as UmaOption[];
    if (storageList.length !== 0) {
      setUmaDataList(storageList);
    }
  }, []);
  return (
    <>
      {/*      <RaceForm />
       */}
      {dialogOpen && umaDataList !== null && umaDataList.length !== 0 && (
        <SelectUma
          umaDataList={umaDataList}
          dialogOpen={dialogOpen}
          setDialogOpen={setDialogOpen}
        />
      )}
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        <Button
          onClick={() => setDialogOpen(true)}
          disabled={umaDataList === null || umaDataList.length === 0}
        >
          選擇出賽馬娘
        </Button>
        <Button onClick={() => simulateStart()} disabled={raceOption === null}>
          {t('start')}
        </Button>
      </ButtonGroup>
      {Object.keys(raceResult).length !== 0 && (
        <RaceLineChart raceResult={raceResult} />
      )}
    </>
  );
};

export default ChampMeet;
