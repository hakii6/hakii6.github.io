// top module
import React, { useState, useEffect, useCallback, useMemo } from 'react';
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

// redux store
import * as raceSimulatorActions from '../../raceSimulatorSlice';
import { RootState } from '../../../../store';

// child components
import MainForm from './MainForm';

// other
import { UmaSetting } from '../../types';
import { getStorage } from '../../../../functions/LocalStorage';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  formControl: {
    marginBottom: theme.spacing(3),
  },
}));

const UmaForm = (): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  // state & selector
  const umaDataList = useSelector(
    (state: RootState) => state.raceSimulator.umaDataList
  );
  const [umaIndex, setUmaIndex] = useState<number>(0);

  const handleChange = (e: any) => {
    setUmaIndex(Number(e.currentTarget.value));
  };
  return (
    <>
      <Grid className={classes.root}>
        <FormControl required>
          <Select
            native
            labelId="umaIndex-label"
            id="umaIndex"
            name="umaIndex"
            value={umaIndex}
            variant="outlined"
            onChange={handleChange}
            className={classes.formControl}
          >
            {umaDataList.map((umaData: UmaSetting, index: number) => (
              <option key={umaData.name + String(index)} value={index}>
                {umaData.name}
              </option>
            ))}
          </Select>
        </FormControl>
        <MainForm key={umaIndex} umaIndex={umaIndex} />
      </Grid>
    </>
  );
};

export default UmaForm;
