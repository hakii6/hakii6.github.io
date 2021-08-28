import React, { useState, useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';
// import * as racesActions from '../features/races/racesSlice';
import TextField from '@material-ui/core/TextField';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

interface IProps {
  uma: Uma | Record<string, never>,
}

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

const UmaStatusForm = ({ uma }: IProps) => {
  const [umaSetting, setUmaSetting] = useState(uma);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUmaSetting(Object.assign(
      umaSetting,
      {
        status: Object.assign(
          umaSetting.status,
          { [e.currentTarget.name]: Number(e.currentTarget.value) },
        ),
      },
    ));
  };

  return (
    <form>
      <FormControl required>
        <TextField
          id="speed"
          name="speed"
          value={umaSetting.status.speed}
          type="number"
          label="速度"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          id="stamina"
          name="stamina"
          value={umaSetting.status.stamina}
          type="number"
          label="耐力"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          id="power"
          name="power"
          value={umaSetting.status.power}
          type="number"
          label="力量"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          id="guts"
          name="guts"
          value={umaSetting.status.guts}
          type="number"
          label="根性"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          id="wisdom"
          name="wisdom"
          value={umaSetting.status.wisdom}
          type="number"
          label="智慧"
          variant="outlined"
          onChange={handleChange}
        />
      </FormControl>

    </form>
  );
};

export default UmaStatusForm;
