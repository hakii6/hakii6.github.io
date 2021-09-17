// top module
import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

// UI components
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
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
import { UmaOption, StatusType } from '../../types';

interface Props {
  umaData: UmaOption;
  setUmaData: (arg1: UmaOption) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    spacing: theme.spacing(3),
  },
  gridItem: {
    padding: theme.spacing(2),
  },
  textField: {
    padding: theme.spacing(1),
  },
}));

const StatusForm = ({ umaData, setUmaData }: Props): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  // useMemo & useCallback
  const checkError = useCallback(
    (property: string) => {
      const checkValue = umaData.status[property as StatusType];
      return (
        checkValue > 2000 || checkValue < 1 || !Number.isInteger(checkValue)
      );
    },
    [umaData]
  );

  // others
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

  return (
    <form>
      <Grid container className={classes.root}>
        {(Object.keys(umaData.status) as StatusType[]).map(
          (value: StatusType) => (
            <Grid key={value} item xs className={classes.gridItem}>
              <FormControl required>
                <TextField
                  // className={classes.textField}
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
              </FormControl>
            </Grid>
          )
        )}
      </Grid>
    </form>
  );
};

export default StatusForm;
