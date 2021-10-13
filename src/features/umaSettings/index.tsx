// top module
import * as React from 'react';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from 'styles';

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
} from '@mui/material';

// redux store
import { RootState } from 'store';
import { getStorage } from 'utils/LocalStorage';
// import * as actions from './umaSettingsSlice';

// components
import IconButtons from './components/IconButtons';

// other
import { UmaSetting } from './types';

const UmaSettings = () => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  // state & selector
  // const umaDataList = useSelector(
  //   (state: RootState) => state.raceSimulator.umaDataList
  // );
  // const [umaIndex, setUmaIndex] = useState<number>(0);
  // const handleChange = (e: any) => {
  //   setUmaIndex(Number(e.currentTarget.value));
  // };
  return (
    <>
      <IconButtons />
    </>
  );
};

export default UmaSettings;
// {/*        <MainForm key={umaIndex} umaIndex={umaIndex} />
//  */}{' '}
//              {            {umaDataList.map((umaData: UmaSetting, index: number) => (
//       <option key={umaData.name + String(index)} value={index}>
//         {umaData.name}
//       </option>
//     ))} }
// <Grid>
//   <FormControl required>
//     <Select
//       native
//       labelId="umaIndex-label"
//       id="umaIndex"
//       name="umaIndex"
//       value={umaIndex}
//       variant="outlined"
//       onChange={handleChange}
//       className={classes.formControl}
//     ></Select>
//   </FormControl>
// </Grid>
