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

const StatusTextField = ({
  statusName,
  umaData,
  handleChange,
  checkError,
}) => (
  <TextField
    id={statusName}
    name={statusName}
    value={umaData.status.[statusName]}
    type="number"
    label={statusName}
    error={checkError(statusName)}
    helperText={checkError(statusName) ? '請輸入1~2000之內的整數' : ''}
    variant="outlined"
    onChange={handleChange}
  />
);

const UmaStatusForm = ({ umaData, setUmaData }) => {
  const statusType = Object.keys(umaData.status);
  const handleChange = (e) => {
    setUmaData({
      ...umaData,
      status: {
        ...umaData.status,
        [e.target.name]: Number(e.target.value),
      },
    });
    console.log(umaData);
  };

  const checkError = useCallback((property) => {
    const checkValue = umaData.status.[property];
    return (checkValue > 2000
      || checkValue < 1
      || !Number.isInteger(checkValue));
  }, [umaData]);

  return (
    <form>
      <FormControl required>
        {
          statusType.map((value) => (
            <StatusTextField
              statusName={value}
              umaData={umaData}
              handleChange={handleChange}
              checkError={checkError}
            />
          ))
        }
      </FormControl>

    </form>
  );
};

export default UmaStatusForm;
