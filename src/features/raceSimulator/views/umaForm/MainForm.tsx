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
import { updateUmaAsync } from '../../raceSimulatorSlice';
import { RootState } from '../../../../store';

// child components
import StatusForm from './StatusForm';
import OptionForm from './OptionForm';
import SkillForm from './SkillForm';

// other
import { UmaSetting } from '../../types';
import {
  getStorage,
  updateStorage,
  showStorage,
} from '../../../../functions/LocalStorage';

import skillPassive from '../../constants/SkillPassive';
import skillPassiveDict from '../../constants/SkillPassiveDict';

const defaultSkill = Object.keys(skillPassiveDict);

const arrToCheckbox = (skillArr: string[]) =>
  defaultSkill.map((skillId) => skillId in skillArr);

const checkboxToArr = (checkbox: boolean[]): string[] => {
  const skillArr: string[] = [];
  checkbox.forEach((checked: boolean, index: number) => {
    if (checked) {
      skillArr.push(defaultSkill[index]);
    }
  });
  return skillArr;
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
  const originUmaData = useSelector(
    (state: RootState) => state.raceSimulator.umaDataList[umaIndex]
  );
  const {
    skill: originSkill,
    status: originStatus,
    option: originOption,
  } = originUmaData;

  const [status, setStatus] = useState<UmaSetting['status']>(originStatus);
  const [option, setOption] = useState<UmaSetting['option']>(originOption);
  const [skillCheckbox, setSkillCheckbox] = useState<boolean[]>(
    arrToCheckbox(originSkill.passive)
  );

  // others
  const saveUma = () => {
    const newUmaData = {
      ...originUmaData,
      status,
      option,
      skill: {
        passive: checkboxToArr(skillCheckbox),
      },
    };
    dispatch(updateUmaAsync([newUmaData, umaIndex]));
  };
  const restoredUma = () => {
    setStatus(originStatus);
    setOption(originOption);
    setSkillCheckbox(arrToCheckbox(originSkill.passive));
  };

  return (
    <>
      <StatusForm status={status} setStatus={setStatus} />
      <OptionForm option={option} setOption={setOption} />
      <SkillForm
        skillCheckbox={skillCheckbox}
        setSkillCheckbox={setSkillCheckbox}
      />
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
