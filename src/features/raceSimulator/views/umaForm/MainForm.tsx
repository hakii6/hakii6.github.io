// top module
import React, { useState, useEffect, useCallback } from 'react';
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

// child components
import StatusForm from './StatusForm';
import OptionForm from './OptionForm';

// other
import { UmaOption } from '../../types';
import {
  getStorage,
  updateStorage,
  showStorage,
} from '../../../../functions/LocalStorage';

const defaultUma: UmaOption = {
  umaName: '',
  status: {
    speed: 1200,
    stamina: 900,
    power: 1200,
    guts: 300,
    wisdom: 300,
  },
  usingStyle: '1',
  fit: {
    surface: 'A',
    dist: 'A',
    style: 'A',
  },
  motivation: '0',
};

interface Props {
  umaIndex: number;
}

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    alignItems: 'center',
  },
  button: {
    // margin: theme.spacing(3),
  },
}));

const MainForm = ({ umaIndex }: Props): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  // state & selector
  const [umaData, setUmaData] = useState<UmaOption | null>(null);
  const [originData, setOriginData] = useState<UmaOption | null>(null);

  // others
  const saveUma = () => {
    updateStorage('umaDataList', umaData, umaIndex);
  };
  const restoredUma = () => {
    const rawUmaData = { ...defaultUma, umaName: umaData!.umaName };
    setUmaData(originData);
  };

  // sideEffect(useEffect)
  useEffect(() => {
    const storageData = {
      ...defaultUma,
      ...showStorage('umaDataList', umaIndex),
    };
    setUmaData(storageData);
    setOriginData(storageData);
  }, [umaIndex]);
  return (
    <>
      {umaData && (
        <>
          <StatusForm umaData={umaData} setUmaData={setUmaData} />
          <OptionForm umaData={umaData} setUmaData={setUmaData} />
          <div className={classes.root}>
            <ButtonGroup
              variant="contained"
              color="primary"
              aria-label="modify button group"
            >
              <Button onClick={() => saveUma()} className={classes.button}>
                {t('save')}
              </Button>
              <Button onClick={() => restoredUma()} className={classes.button}>
                {t('restore')}
              </Button>
            </ButtonGroup>
          </div>
        </>
      )}
    </>
  );
};

export default MainForm;
