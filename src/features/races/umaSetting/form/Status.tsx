// top module
import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from './styles';

// UI components
import {
  TextField,
  ButtonGroup,
  Button,
  InputLabel,
  FormHelperText,
  FormControl,
  Select,
  Grid,
} from '@material-ui/core';

// other
import { UmaSetting, StatusType } from '../types';

interface Props {
  status: UmaSetting['status'];
  setStatus: (arg1: UmaSetting['status']) => void;
}

const StatusForm = ({ status, setStatus }: Props): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  // useMemo & useCallback
  const checkError = useCallback(
    (property: StatusType) => {
      const checkValue = status[property];
      return (
        checkValue > 2000 || checkValue < 1 || !Number.isInteger(checkValue)
      );
    },
    [status]
  );

  // others
  const handleChange = (
    e: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setStatus({
      ...status,
      [e.target.name as StatusType]: Number(e.target.value),
    });
  };

  return (
    <form>
      <Grid container className={classes.root}>
        {(Object.keys(status) as StatusType[]).map((value: StatusType) => (
          <Grid key={value} item xs className={classes.gridItem}>
            <FormControl required>
              <TextField
                // className={classes.textField}
                key={value}
                id={value}
                name={value}
                value={status[value]}
                type="number"
                label={t(`Uma.${value}`)}
                error={checkError(value)}
                helperText={checkError(value) ? '1~2000' : ''}
                variant="outlined"
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
        ))}
      </Grid>
    </form>
  );
};

export default StatusForm;
