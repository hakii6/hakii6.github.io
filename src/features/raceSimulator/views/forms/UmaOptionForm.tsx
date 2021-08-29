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

import { Uma } from '../../types';

interface Props {
  umaData: Uma,
  setUmaData: (arg1: any) => void,
}

const UmaOptionForm = ({ umaData, setUmaData }: Props) => {
  const handleChange = (e: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    if (typeof e.target.name === 'string') {
      setUmaData({ ...umaData, [e.target.name]: e.target.value });
    }
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
          value={umaData.usingStyle}
          onChange={handleChange}
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
          value={umaData.motivation}
          onChange={handleChange}
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
