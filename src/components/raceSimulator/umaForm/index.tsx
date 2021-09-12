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
import MainForm from './MainForm';
import CreateUmaDialog from './CreateUmaDialog';
import StatusForm from './StatusForm';
import OptionForm from './OptionForm';

// other
import { UmaOption } from '../types';
import { getStorage } from '../../../functions/LocalStorage';

const UmaForm = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [umaDataList, setUmaDataList] = useState<UmaOption[] | null>(null);
  const [umaIndex, setUmaIndex] = useState<number>(-1);

  useEffect(() => {
    const storageData = getStorage('umaDataList') as UmaOption[];
    if (storageData !== null && storageData.length !== 0) {
      setUmaDataList(storageData);
    }
  }, [dialogOpen]);

  const handleChange = (e: any) => {
    setUmaIndex(Number(e.currentTarget.value));
  };

  return (
    <>
      {umaDataList && (
        <FormControl required>
          <Select
            native
            labelId="umaIndex-label"
            id="umaIndex"
            name="umaIndex"
            value={umaIndex}
            variant="outlined"
            onChange={handleChange}
          >
            <option disabled value={-1}>
              請選擇馬娘
            </option>
            {umaDataList.map((umaData: UmaOption, index: number) => (
              <option key={umaData.umaName + String(index)} value={index}>
                {umaData.umaName}
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
        <Button onClick={() => setDialogOpen(true)}>{t('add')}</Button>
      </ButtonGroup>
      {dialogOpen && (
        <CreateUmaDialog
          dialogOpen={dialogOpen}
          setDialogOpen={setDialogOpen}
        />
      )}

      {umaIndex !== -1 && <MainForm umaIndex={umaIndex} />}
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
