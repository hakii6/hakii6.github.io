// top module
import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';

// UI components
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
import * as raceSimulatorActions from '../racesSlice';
import { RootState } from '../../../store';

// other
import { UmaSetting } from '../types';
import { getStorage } from '../../../functions/LocalStorage';

interface Props {
  checkbox: boolean[];
  setCheckbox: (arg1: boolean[]) => void;
}

const SelectUma = ({ checkbox, setCheckbox }: Props): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  // state & selector
  const umaDataList = useSelector(
    (state: RootState) => state.raceSimulator.umaDataList
  );

  const handleChange = (e: any) => {
    const changeIndex = Number(e.target.name);
    const newCheckbox = [...checkbox];
    newCheckbox[changeIndex] = !newCheckbox[changeIndex];
    setCheckbox(newCheckbox);
  };

  return (
    <>
      <FormGroup className={classes.formGroup}>
        {umaDataList.map((umaData: UmaSetting, index: number) => (
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
          key={'啾星雲'}
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
          key={'chu星雲'}
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
