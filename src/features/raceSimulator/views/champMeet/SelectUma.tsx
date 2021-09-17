// top module
import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

// UI components
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from '@material-ui/core';

// redux store
import * as raceSimulatorActions from '../../raceSimulatorSlice';
import { RootState } from '../../../../store';

// other
import { UmaOption } from '../../types';
import { getStorage } from '../../../../functions/LocalStorage';

const useStyles = makeStyles((theme) => ({
  root: {},
  formGroup: {
    marginLeft: theme.spacing(70),
  },
}));

interface Props {
  umaDataList: UmaOption[];
  checkbox: boolean[];
  setCheckbox: (arg1: boolean[]) => void;
}

const SelectUma = ({
  umaDataList,
  checkbox,
  setCheckbox,
}: Props): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = (e: any) => {
    const changeIndex = Number(e.target.name);
    const newCheckbox = [...checkbox];
    newCheckbox[changeIndex] = !newCheckbox[changeIndex];
    setCheckbox(newCheckbox);
  };

  return (
    <>
      <FormGroup className={classes.formGroup}>
        {umaDataList.map((umaData: UmaOption, index: number) => (
          <FormControlLabel
            key={umaData.name + String(index)}
            control={
              <Checkbox
                name={String(index)}
                checked={checkbox[index]}
                onChange={handleChange}
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            }
            label={umaData.name}
          />
        ))}
        <FormControlLabel
          control={
            <Checkbox
              checked
              onChange={handleChange}
              disabled
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          }
          label="啾星雲"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked
              onChange={handleChange}
              disabled
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          }
          label="chu星雲"
        />
      </FormGroup>
    </>
  );
};

export default SelectUma;
