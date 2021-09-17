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
import RaceResult from './RaceResult';

// other
import { UmaOption, RaceOption } from '../../types';
import {
  getStorage,
  updateStorage,
  showStorage,
  getSingleStorage,
  setSingleStorage,
} from '../../../../functions/LocalStorage';

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
  const umaDataList = useSelector(
    (state: RootState) => state.raceSimulator.umaDataList
  );
  const rawRaceOption = useSelector(
    (state: RootState) => state.raceSimulator.raceOption
  );
  const [checkbox, setCheckbox] = useState<boolean[]>(
    Array(umaDataList.length).fill(false)
  );
  const [raceOption, setRaceOption] = useState<RaceOption>({
    ...rawRaceOption,
  });
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepperObj = () => {
    let stepForm;
    switch (activeStep) {
      case 0:
        stepForm = (
          <SelectUma
            umaDataList={umaDataList}
            checkbox={checkbox}
            setCheckbox={setCheckbox}
          />
        );
        break;
      case 1:
        stepForm = (
          <RaceForm raceOption={raceOption} setRaceOption={setRaceOption} />
        );
        break;
      case 2:
        stepForm = <RaceResult />;
        break;
      default:
        throw new Error('Unknown step');
    }
    return [
      <Stepper activeStep={activeStep}>
        {steps.map((label: string, index: number) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>,
      stepForm,
    ];
  };

  const handleSubmit = (): void => {
    dispatch(raceSimulatorActions.selectRaceUma(checkbox));
    dispatch(raceSimulatorActions.saveRaceOption(raceOption));
    dispatch(raceSimulatorActions.simulateStart());

    setSingleStorage('raceOption', raceOption);
  };
  return (
    <>
      {stepperObj()}
      <div className={classes.buttons}>
        {activeStep === 1 && (
          <Button
            onClick={() => setActiveStep(activeStep - 1)}
            className={classes.button}
          >
            {t('返回')}
          </Button>
        )}
        {activeStep < 2 && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setActiveStep(activeStep + 1);
              if (activeStep === 1) {
                handleSubmit();
              }
            }}
            className={classes.button}
          >
            {activeStep < 1 ? t('下一步') : t('比賽開始')}
          </Button>
        )}
      </div>
    </>
  );
};

export default ChampMeet;
