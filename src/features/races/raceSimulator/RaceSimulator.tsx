// top module
import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';

// UI components
import {
  ButtonGroup,
  Button,
  Stepper,
  Step,
  StepLabel,
} from '@material-ui/core';

// redux store
import * as raceSimulatorActions from '../racesSlice';
import { saveRaceOptionAsync } from '../racesSlice';
import { RootState } from '../../../store';

// child components
import SelectUma from './SelectUma';
import RaceForm from './RaceForm';
// import RaceResult from './resultCharts/RaceResult';

// other
import { UmaSetting, RaceOption } from '../types';

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
            key="SelectUma"
            checkbox={checkbox}
            setCheckbox={setCheckbox}
          />
        );
        break;
      case 1:
        stepForm = (
          <RaceForm
            key={raceOption.raceTrackId}
            raceOption={raceOption}
            setRaceOption={setRaceOption}
          />
        );
        break;
      case 2:
        // stepForm = <RaceResult key={raceOption.raceId} />;
        break;
      default:
        throw new Error('Unknown step');
    }
    return [
      <Stepper key={1} activeStep={activeStep}>
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
    dispatch(saveRaceOptionAsync(raceOption));
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
