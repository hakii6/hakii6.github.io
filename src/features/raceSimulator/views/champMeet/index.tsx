// top module
import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

// UI components
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  ButtonGroup,
  Button,
  Stepper,
  Step,
  StepLabel,
} from '@material-ui/core';

// redux store
import * as raceSimulatorActions from '../../raceSimulatorSlice';
import { RootState } from '../../../../store';

// child components
import SelectUma from './SelectUma';
import RaceForm from './RaceForm';
import RaceLineChart from './RaceLineChart';

// other
import { UmaOption } from '../../types';
import {
  getStorage,
  updateStorage,
  showStorage,
} from '../../../../functions/LocalStorage';

const defaultUma: UmaOption = {
  umaName: '預設',
  status: {
    speed: 1200,
    stamina: 600,
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

const steps = ['選擇出賽馬娘', '選擇賽道', '模擬開始'];

const ChampMeet = (): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  // state & selector
  const [activeStep, setActiveStep] = useState<number>(0);
  const raceResult = useSelector(
    (state: RootState) => state.raceSimulator.raceResult
  );

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const stepperObj = useMemo(() => {
    switch (activeStep) {
      case 0:
        return <SelectUma handleNext={handleNext} />;
      case 1:
        return <RaceForm handleBack={handleBack} handleNext={handleNext} />;
      case 2:
        return <RaceLineChart raceResult={raceResult} />;
      default:
        throw new Error('Unknown step');
    }
  }, [activeStep]);

  return (
    <>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {stepperObj}
    </>
  );
};

export default ChampMeet;
