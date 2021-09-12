// top module
import React, { useState, useCallback } from 'react';
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

// redux store
import { useSelector, useDispatch } from 'react-redux';
// import * as racesActions from '../features/races/racesSlice';

// other
import { UmaOption, StatusType } from '../types';

interface Props {
  umaData: UmaOption;
  setUmaData: (arg1: UmaOption) => void;
}

const StatusForm = ({ umaData, setUmaData }: Props): JSX.Element => {
  const { t, i18n } = useTranslation();
  const statusTypeArr = Object.keys(umaData.status) as StatusType[];
  const handleChange = (
    e: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setUmaData({
      ...umaData,
      status: {
        ...umaData.status,
        [e.target.name as StatusType]: Number(e.target.value),
      },
    });
  };

  const checkError = useCallback(
    (property: string) => {
      const checkValue = umaData.status[property as StatusType];
      return (
        checkValue > 2000 || checkValue < 1 || !Number.isInteger(checkValue)
      );
    },
    [umaData]
  );

  return (
    <form>
      <FormControl required>
        {statusTypeArr.map((value: StatusType) => (
          <TextField
            key={value}
            id={value}
            name={value}
            value={umaData.status[value as StatusType]}
            type="number"
            label={t(`Uma.${value}`)}
            error={checkError(value)}
            helperText={checkError(value) ? '1~2000' : ''}
            variant="outlined"
            onChange={handleChange}
          />
        ))}
      </FormControl>
    </form>
  );
};

export default StatusForm;
