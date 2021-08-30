import React, { useState, useEffect, useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';
// import * as racesActions from '../features/races/racesSlice';
import TextField from '@material-ui/core/TextField';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import EventDialog from './EventDialog';
import StatusForm from './StatusForm';
import OptionForm from './OptionForm';

import { Uma } from '../../types';
import { getStorageArray, setStorageArray } from '../../functions/LocalStorage';

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
  motivation: '1',
};

const UmaForm = () => {
  const [dialogOpen, setDialogOpen] = useState<string>('');
  const [umaIndex, setUmaIndex] = useState<number | null>(null);
  const [umaData, setUmaData] = useState<Uma | null>(null);
  const [umaList, setUmaList] = useState<Uma[] | null>(
    getStorageArray('umaList')
  );

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const index = Number(event.target.value);
    if (umaList === null) {
      setUmaList([]);
    } else if (typeof index === 'number' && umaList[index] !== null) {
      setUmaIndex(index);
      setUmaData(umaList[index]);
    }
  };

  const actionFunc = useCallback(
    (name?: string) => {
      let uma = defaultUma;
      let newUmaList: Uma[] = umaList !== null ? [...umaList] : [];
      switch (dialogOpen) {
        case 'add':
          if (typeof name !== 'undefined') {
            uma = { ...uma, umaName: name };
            newUmaList = newUmaList.concat(uma);
          }
          break;
        case 'save':
          if (umaIndex !== null && umaData !== null) {
            newUmaList[umaIndex] = umaData;
          }
          break;
        case 'delete':
          newUmaList = newUmaList.filter(
            (value: Uma, index: number) => index !== umaIndex
          );
          break;
        case 'reset':
          newUmaList = [];
          break;
        default:
          break;
      }
      setUmaList(newUmaList);
    },
    [dialogOpen]
  );

  useEffect(() => {
    if (umaIndex === null) {
      if (umaList !== null && umaList.length !== 0) {
        setUmaIndex(0);
        setUmaData(umaList[0]);
      }
    }
    setStorageArray('umaList', umaList, 'replace');
  }, [umaList]);

  return (
    <>
      <FormControl required>
        <InputLabel id="umaIndex-label">請選擇馬娘</InputLabel>
        <Select
          native
          labelId="umaIndex-label"
          id="umaIndex"
          name="umaIndex"
          value={umaIndex}
          variant="outlined"
          onChange={handleChange}
        >
          {umaList !== null &&
            umaList.length !== 0 &&
            umaList.map((value, index) => (
              <option value={index}>{value.umaName}</option>
            ))}
        </Select>
      </FormControl>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        <Button onClick={() => setDialogOpen('add')}>add</Button>
        <Button
          onClick={() => setDialogOpen('save')}
          disabled={umaIndex === null}
        >
          save
        </Button>
        <Button onClick={() => setDialogOpen('delete')}>delete</Button>
        <Button onClick={() => setDialogOpen('reset')}>reset</Button>
      </ButtonGroup>
      {umaData && (
        <>
          <StatusForm umaData={umaData} setUmaData={setUmaData} />
          <OptionForm umaData={umaData} setUmaData={setUmaData} />
        </>
      )}

      {dialogOpen !== '' && (
        <EventDialog
          dialogOpen={dialogOpen}
          setDialogOpen={setDialogOpen}
          actionFunc={actionFunc}
        />
      )}
    </>
  );
};

export default UmaForm;
