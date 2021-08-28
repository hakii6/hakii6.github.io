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

import UmaEventDialog from './UmaEventDialog';
import UmaStatusForm from './UmaStatusForm';
import UmaOptionForm from './UmaOptionForm';

import { RootState } from '../../../../store';

interface Uma {
  umaName: string,
  status: {
    speed: number,
    stamina: number,
    power: number,
    guts: number,
    wisdom: number,
  },
  usingStyle: string,
  fit: {
    surface: string,
    dist: string,
    style: string,
  },
  motivation: string,
}

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

const UmaForm = () => {
  const dispatch = useDispatch();
  // const umasSaved = useSelector((state: RootState) => state.raceSimulator.umasSaved);
  const [umasSaved, setUmasSaved] = useState<Uma[]>([]);
  const [currentUma, setCurrentUma] = useState({});
  const [dialogOpen, setDialogOpen] = useState('');

  useEffect(() => {
    let localUmas: any;
    try {
      localUmas = JSON.parse(localStorage.getItem('umasSaved'));
    } catch (e) {
      localStorage.deleteItem('umasSaved');
      localUmas = [];
    }
    // const localUmas = JSON.parse(localStorage.getItem('umasSaved'));
    console.log(localUmas);
    // setUmasSaved(localUmas);
  }, []);

  const initCurrentUma = (name: string) => {
    const newUma = Object.assign(defaultUma, { umaName: name });
    const newUmasSaved = umasSaved.concat(newUma);
    setUmasSaved(newUmasSaved);
    localStorage.setItem('umasSaved', JSON.stringify(newUmasSaved));
    console.log(localStorage.getItem('umasSaved'));
  };

  const handleChange = (event: React.ChangeEvent<{value: unknown}>) => {
    console.log(event);
    // setUmaName(event.currentTarget.value);
  };

  return (
    <>
      <FormControl required>
        {
          /*
          <InputLabel id="umaName-label">馬娘名字</InputLabel>
          <Select
            native
            labelId="umaName-label"
            id="umaName"
            name="umaName"
            value={umasSaved}
            onChange={handleChange}
          >
              { umasSaved.map((value: string, index: number) =>
              <option value={value}>{value}</option>)}
          </Select>
          */
        }
      </FormControl>

      {
        Object.keys(currentUma).length !== 0
        && <UmaStatusForm uma={currentUma} />
        && <UmaOptionForm uma={currentUma} />
      }
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button onClick={() => setDialogOpen('add')}>
          add
        </Button>
        <Button onClick={() => { alert('clicked'); }}>load</Button>
        <Button onClick={() => { alert('clicked'); }}>save</Button>
      </ButtonGroup>

      <UmaEventDialog
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        initCurrentUma={initCurrentUma}
      />
    </>
  );
};

export default UmaForm;

// <UmaStatusForm defaultUma={currentUma} />
// <UmaOptionForm defaultUma={currentUma} />
