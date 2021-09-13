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
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
}));

interface Props {
  handleNext: () => void;
}

const defaultUma: UmaOption = {
  umaName: '啾星雲',
  status: {
    speed: 1200,
    stamina: 600,
    power: 901,
    guts: 300,
    wisdom: 1200,
  },
  usingStyle: '1',
  fit: {
    surface: 'A',
    dist: 'S',
    style: 'S',
  },
  motivation: '0',
};
const defaultUma2: UmaOption = {
  umaName: 'chu星雲',
  status: {
    speed: 1200,
    stamina: 600,
    power: 901,
    guts: 300,
    wisdom: 1200,
  },
  usingStyle: '1',
  fit: {
    surface: 'A',
    dist: 'S',
    style: 'S',
  },
  motivation: '0',
};

const SelectUma = ({ handleNext }: Props): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  // state & selector
  const [umaDataList, setUmaDataList] = useState<UmaOption[] | null>(null);
  const [checkbox, setCheckbox] = useState<boolean[]>([]);

  const handleChange = (e: any) => {
    const changeIndex = Number(e.target.name);
    const newCheckbox = [...checkbox];
    newCheckbox[changeIndex] = !newCheckbox[changeIndex];
    setCheckbox(newCheckbox);
  };
  const handleSubmit = () => {
    if (umaDataList !== null) {
      if (umaDataList.length !== 0) {
        dispatch(
          raceSimulatorActions.setUmaDataList(
            umaDataList
              .filter((umaData: UmaOption, index: number) => checkbox[index])
              .concat(defaultUma, defaultUma2)
          )
        );
      }
    }
  };
  const checkboxList = useMemo(() => {
    if (umaDataList !== null) {
      if (umaDataList.length !== 0) {
        return umaDataList.map((umaData: UmaOption, index: number) => (
          <FormControlLabel
            key={umaData.umaName + String(index)}
            control={
              <Checkbox
                name={String(index)}
                checked={checkbox[index]}
                onChange={handleChange}
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            }
            label={umaData.umaName}
          />
        ));
      }
    }
    return <></>;
  }, [checkbox]);

  useEffect(() => {
    const storageList = getStorage('umaDataList') as UmaOption[];
    if (storageList.length !== 0) {
      setUmaDataList(storageList);
      setCheckbox(Array(storageList.length).fill(false));
    } else {
      throw new Error('至少需要一隻馬娘');
    }
  }, []);

  return (
    <>
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
      <div className={classes.buttons}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            handleSubmit();
            handleNext();
          }}
          className={classes.button}
        >
          {t('下一步')}
        </Button>
      </div>
    </>
  );
};

export default SelectUma;
