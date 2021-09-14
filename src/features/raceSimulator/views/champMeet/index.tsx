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
import RaceChart from './RaceChart';

// other
import { UmaOption, RaceOption } from '../../types';
import {
  getStorage,
  updateStorage,
  showStorage,
  getSingleStorage,
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
const defaultRaceOption: RaceOption = {
  raceTrackId: '10009',
  raceId: '10903',
  groundCond: '0',
  weather: '1',
  season: '3',
};
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

const ChampMeet = (): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  // state & selector
  const [activeStep, setActiveStep] = useState<number>(0);
  const raceObject = useSelector(
    (state: RootState) => state.raceSimulator.raceObject
  );

  // state & selector
  const [umaDataList, setUmaDataList] = useState<UmaOption[]>([]);
  const [checkbox, setCheckbox] = useState<boolean[]>([]);
  const [raceOption, setRaceOption] = useState<RaceOption | null>(null);

  const stepperObj = () => {
    let stepForm;
    if (umaDataList !== null && raceOption !== null) {
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
          stepForm = <RaceChart />;
          break;
        default:
          throw new Error('Unknown step');
      }
      return [
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>,
        stepForm,
      ];
    }
    return <></>;
  };

  const handleSubmit = (): void => {
    dispatch(
      raceSimulatorActions.setUmaDataList(
        umaDataList
          .filter((umaData: UmaOption, index: number) => checkbox[index])
          .concat(defaultUma, defaultUma2)
      )
    );
    dispatch(raceSimulatorActions.saveRace(raceOption));
    dispatch(raceSimulatorActions.simulateStart());
  };

  useEffect(() => {
    const storageList = getStorage('umaDataList') as UmaOption[];
    if (storageList.length !== 0) {
      setUmaDataList(storageList);
      setCheckbox(Array(storageList.length).fill(false));
    } else {
      throw new Error('至少需要一隻馬娘');
    }

    const storageObj = getSingleStorage('raceOption');
    if (storageObj !== null) {
      setRaceOption(Object.assign(defaultRaceOption, storageObj));
    }
  }, []);

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
