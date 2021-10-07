// top module
import React, { useState, useEffect, useCallback, useMemo } from 'react';
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

// redux store
import * as racesActions from '../racesSlice';
import { RootState } from '../../../store';

// child components
import Form from './form/Form';

// other
import { UmaSetting } from '../types';
import { getStorage } from '../../../functions/LocalStorage';

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
