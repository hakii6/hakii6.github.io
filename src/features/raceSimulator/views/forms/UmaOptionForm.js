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

import { RootState } from '../../../../store';

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

const UmaOptionForm = ({ uma }: IProps) => {
  const [umaSetting, setUmaSetting] = useState(uma);

  const handleChange = (property: string, e: React.ChangeEvent < HTMLSelectElement >) => {
    setUmaSetting(Object.assign(
      umaSetting,
      { [property]: e },
    ));
  };

  return (
    <form>
      <FormControl required>
        <InputLabel id="usingStyle-label">跑法</InputLabel>
        <Select
          native
          labelId="usingStyle-label"
          id="usingStyle"
          name="usingStyle"
          value={umaSetting.usingStyle}
          onChange={
            (e: React.ChangeEvent<{
              name?: string | undefined, value: any
            }>): void => handleChange('usingStyle', e.target.value)
          }
        >
          <option value="1">逃</option>
          <option value="2">先</option>
          <option value="3">差</option>
          <option value="4">追</option>
        </Select>
      </FormControl>
      <FormControl required>
        <InputLabel id="motivation-label">心情</InputLabel>
        <Select
          native
          labelId="motivation-label"
          id="motivation"
          name="motivation"
          value={umaSetting.motivation}
          onChange={
            (e: React.ChangeEvent<{
              name?: string | undefined, value: any
            }>): void => handleChange('motivation', e.target.value)
          }
        >
          <option value="0">絕好調</option>
          <option value="1">好調</option>
          <option value="2">普通</option>
          <option value="3">不調</option>
          <option value="4">絕不調</option>
        </Select>
      </FormControl>

    </form>
  );
};

export default UmaOptionForm;
