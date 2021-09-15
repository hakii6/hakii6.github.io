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
import StatusForm from './StatusForm';
import OptionForm from './OptionForm';

// other
import { UmaOption } from '../../types';
import {
  getStorage,
  updateStorage,
  showStorage,
} from '../../../../functions/LocalStorage';

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
  const umaDataList = useSelector(
    (state: RootState) => state.raceSimulator.umaDataList
  );
  const [umaData, setUmaData] = useState<UmaOption>({
    ...umaDataList[umaIndex],
  });
  const originData: UmaOption = useMemo(
    () => umaDataList[umaIndex],
    [umaIndex]
  );

  // others
  const saveUma = () => {
    updateStorage('umaDataList', umaData, umaIndex, () =>
      dispatch(
        raceSimulatorActions.updateUma({
          umaData,
          umaIndex,
        })
      )
    );
  };
  const restoredUma = () => {
    setUmaData(originData);
  };

  // side effect: need to reset umaData when umaIndex get changed
  useEffect(() => {
    setUmaData({ ...originData });
  }, [umaIndex]);

  return (
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
  );
};

export default MainForm;
