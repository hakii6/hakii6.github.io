// top module
import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

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
import * as raceSimulatorActions from '../../../features/raceSimulator/raceSimulatorSlice';
import { RootState } from '../../../store';

// child components
// import RaceResult from './RaceResult';
// import RaceResultMode2 from './RaceResultMode2';

// other
import { UmaOption } from '../types';
import { generateRandomNumberArray } from '../../../functions/Common';

interface Props {
  umaDataList: UmaOption[];
  dialogOpen: boolean;
  setDialogOpen: (arg1: boolean) => void;
}

const SelectUma = ({
  umaDataList,
  dialogOpen,
  setDialogOpen,
}: Props): JSX.Element => {
  const { t, i18n } = useTranslation();
  const [checkbox, setCheckbox] = useState<boolean[]>(
    Array(umaDataList.length).fill(false, 0)
  );
  const dispatch = useDispatch();
  const handleChange = (e: any) => {
    const changeIndex = Number(e.target.name);
    const newCheckbox = [...checkbox];
    newCheckbox[changeIndex] = !newCheckbox[changeIndex];
    setCheckbox(newCheckbox);
  };
  const handleSubmit = () => {
    dispatch(
      raceSimulatorActions.setUmaDataList(
        umaDataList.filter(
          (umaData: UmaOption, index: number) => checkbox[index]
        )
      )
    );
    setDialogOpen(false);
  };
  const checkboxList = useMemo(
    () =>
      umaDataList.map((umaData: UmaOption, index: number) => (
        <FormControlLabel
          control={
            <Checkbox
              name={String(index)}
              checked={checkbox[index]}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          }
          label={umaData.umaName}
        />
      )),
    [checkbox]
  );
  return (
    <Dialog
      open={dialogOpen}
      onClose={() => setDialogOpen(false)}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">請選擇參賽的馬娘</DialogTitle>
      <FormGroup>
        {checkboxList}
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
      <DialogActions>
        <Button onClick={() => setDialogOpen(false)} color="primary">
          取消
        </Button>
        <Button onClick={handleSubmit} color="primary">
          確定
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SelectUma;
