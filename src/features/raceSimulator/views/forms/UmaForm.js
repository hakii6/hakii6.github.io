import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';

import { useSelector, useDispatch } from 'react-redux';
// import * as racesActions from '../features/races/racesSlice';
import TextField from '@material-ui/core/TextField';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import UmaEventDialog from './UmaEventDialog';
import UmaStatusForm from './UmaStatusForm';
import UmaOptionForm from './UmaOptionForm';

const defaultUma = {
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

const getStorageData = (property) => {
  let storageData = localStorage.getItem(property);
  try {
    storageData = JSON.parse(localStorage.getItem(property));
  } catch (e) {
    storageData.removeItem(property);
    storageData = [];
  }
  if (!Array.isArray(storageData)) {
    storageData = [];
  }
  return storageData;
};

const UmaForm = () => {
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = useState('');
  const [umaIndex, setUmaIndex] = useState(null);
  const [umaData, setUmaData] = useState(null);

  const [umaList, setUmaList] = useState(getStorageData('umaList'));

  const addUma = (name) => {
    const uma = { ...defaultUma, umaName: name };
    const newUmaList = umaList.concat(uma);
    setUmaList(newUmaList);
  };

  const saveUma = () => {
    const uma = umaData;
    const newUmaList = [...umaList];
    newUmaList[umaIndex] = uma;
    setUmaList(newUmaList);
  };

  const deleteUma = () => {
    const newUmaList = umaList.filter((value, index) => index !== umaIndex);
    setUmaList(newUmaList);
  };

  const resetAllUmas = useCallback(() => {
    setUmaList([]);
    setUmaIndex(null);
    setUmaData(null);
  }, []);

  const handleChange = (event) => {
    const index = event.target.value;
    setUmaIndex(index);
    setUmaData(umaList[index]);
  };

  useEffect(() => {
    if (umaList.length !== 0) {
      setUmaIndex(0);
      setUmaData(umaList[0]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('umaList', JSON.stringify(umaList));
  }, [umaList]);

  return (
    <>
      <FormControl required>
        <InputLabel id="umaIndex-label">馬娘名字</InputLabel>
        <Select
          native
          labelId="umaIndex-label"
          id="umaIndex"
          name="umaIndex"
          value={umaIndex}
          variant="outlined"
          onChange={handleChange}
        >
          {
            umaList.length !== 0
            && umaList.map((value, index) => <option value={index}>{value.umaName}</option>)
          }
        </Select>
      </FormControl>
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button onClick={() => setDialogOpen('add')}>add</Button>
        <Button onClick={() => setDialogOpen('save')}>save</Button>
        <Button onClick={() => setDialogOpen('delete')}>delete</Button>
        <Button onClick={() => resetAllUmas()}>reset</Button>
      </ButtonGroup>
      {
        umaData
        && (
          <>
            <UmaStatusForm umaData={umaData} setUmaData={setUmaData} />
            <UmaOptionForm umaData={umaData} setUmaData={setUmaData} />
          </>
        )
      }

      <UmaEventDialog
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        addUma={addUma}
        saveUma={saveUma}
        deleteUma={deleteUma}
      />
    </>
  );
};

export default UmaForm;
