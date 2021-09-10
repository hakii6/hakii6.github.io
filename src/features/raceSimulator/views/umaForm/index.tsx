// top module
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

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
// import MainForm from './MainForm';
import EventDialog from './EventDialog';
import StatusForm from './StatusForm';
import OptionForm from './OptionForm';

// other
import { UmaOption } from '../../types';
import {
  getStorageArray,
  setStorageArray,
  getStorageObject,
  setStorageObject,
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

const UmaForm = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const [dialogOpen, setDialogOpen] = useState<string>('');
  const [selectedUma, setSelectedUma] = useState<string>('');
  const [selectedUmaData, setSelectedUmaData] = useState<UmaOption | null>(
    null
  );

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedUmaName = String(event.currentTarget.value);
    const storedUmaData = getStorageObject(
      `umaList_${String(selectedUmaName)}`
    );
    if (storedUmaData === null) {
      setSelectedUma(selectedUmaName);
      setSelectedUmaData({ ...defaultUma, umaName: selectedUmaName });
    }
    setSelectedUma(selectedUmaName);
    setSelectedUmaData(Object.assign(defaultUma, storedUmaData));
  };

  const addUma = (event: any) => {
    const selectedUmaName = String(event.current.value);
    setSelectedUma(selectedUmaName);
    setSelectedUmaData({ ...defaultUma, umaName: selectedUmaName });
  };

  const umaList: string[] | null = useMemo(() => {
    return getStorageArray('umaList');
  }, []);

  useEffect(() => {
    if (selectedUma !== '') {
      if (umaList !== null) {
        if (!umaList.includes(selectedUma)) {
          setStorageArray('umaList', umaList.concat(selectedUma), 'replace');
        }
      } else {
        setStorageArray('umaList', [selectedUma], 'replace');
      }
      if (selectedUmaData !== null) {
        setStorageObject(`umaList_${selectedUma}`, selectedUma, 'replace');
      }
    }
  }, [selectedUma]);

  return (
    <>
      {umaList && (
        <FormControl required>
          <Select
            native
            labelId="selectedUma-label"
            id="selectedUma"
            name="selectedUma"
            value={selectedUma}
            variant="outlined"
            onChange={handleChange}
          >
            {umaList.map((umaName: string, index: number) => (
              <option key={umaName} value={umaName}>
                {umaName}
              </option>
            ))}
          </Select>
        </FormControl>
      )}
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        <Button onClick={() => setDialogOpen('add')}>{t('add')}</Button>
      </ButtonGroup>
      {dialogOpen !== '' && (
        <EventDialog
          dialogOpen={dialogOpen}
          setDialogOpen={setDialogOpen}
          actionFunc={addUma}
        />
      )}
      {/*      { selectedUma && <MainForm />}
       */}{' '}
    </>
  );
};

export default UmaForm;

// {        <Button
// onClick={() => setDialogOpen('save')}
// disabled={umaIndex === null}
// >
// {t('save')}
// </Button>
// <Button onClick={() => setDialogOpen('delete')}>{t('delete')}</Button>
// <Button onClick={() => setDialogOpen('reset')}>{t('reset')}</Button>}
