// top module
import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

// UI components
import {
  TextField,
  ButtonGroup,
  Button,
  InputLabel,
  FormHelperText,
  FormControl,
  Select,
} from '@material-ui/core';

// child components
// import EventDialog from './EventDialog';
import StatusForm from './StatusForm';
import OptionForm from './OptionForm';

// other
import { UmaOption } from '../../types';
import {
  getStorage,
  updateStorage,
  showStorage,
} from '../../../../functions/LocalStorage';

const defaultUma: UmaOption = {
  umaName: '',
  status: {
    speed: 1200,
    stamina: 900,
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

interface Props {
  umaIndex: number;
}

const MainForm = ({ umaIndex }: Props): JSX.Element => {
  const { t, i18n } = useTranslation();
  const [umaData, setUmaData] = useState<UmaOption | null>(null);

  useEffect(() => {
    const storageData = {
      ...defaultUma,
      ...showStorage('umaDataList', umaIndex),
    };
    setUmaData(storageData);
  }, [umaIndex]);

  const saveUma = () => {
    updateStorage('umaDataList', umaData, umaIndex);
  };

  const resetUma = () => {
    const rawUmaData = { ...defaultUma, umaName: umaData!.umaName };
    setUmaData(rawUmaData);
    updateStorage('umaDataList', rawUmaData, umaIndex);
  };
  return (
    <>
      {umaData && (
        <>
          <StatusForm umaData={umaData} setUmaData={setUmaData} />
          <OptionForm umaData={umaData} setUmaData={setUmaData} />
          <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="contained primary button group"
          >
            <Button onClick={() => saveUma()}>{t('save')}</Button>
          </ButtonGroup>
        </>
      )}
    </>
  );
};

export default MainForm;

// <Button onClick={() => resetUma()}>{t('reset')}</Button>
