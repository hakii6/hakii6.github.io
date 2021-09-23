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

import activeSkills from '../../data/ActiveSkills';
import healingSkills from '../../data/HealingSkills';
import uniqueSkills from '../../data/UniqueSkills';
import succUniqueSkills from '../../data/SuccUniqueSkills';
import passiveSkills from '../../data/PassiveSkills';

interface Props {
  umaIndex: number;
}

const defaultSkills: Record<string, string[]> = {
  passive: passiveSkills.map((skill) => skill.id),
  active: activeSkills.map((skill) => skill.id),
  healing: healingSkills.map((skill) => skill.id),
  unique: uniqueSkills.map((skill) => skill.id),
  succUnique: succUniqueSkills.map((skill) => skill.id),
};

const objectToCheckbox = (
  skillObject: Record<string, string[]>
): Record<string, boolean[]> => {
  const checkbox: Record<string, boolean[]> = {};
  for (const key of Object.keys(skillObject)) {
    checkbox[key] = defaultSkills[key].map((skillId) =>
      skillObject[key].includes(skillId)
    );
  }
  return checkbox;
};

const checkboxToObject = (
  checkbox: Record<string, boolean[]>
): Record<string, string[]> => {
  const obj: Record<string, string[]> = {};
  for (const key of Object.keys(checkbox)) {
    const skillArr: string[] = [];
    checkbox[key].forEach((checked: boolean, index: number) => {
      if (checked) {
        skillArr.push(defaultSkills[key][index]);
      }
    });
    obj[key] = skillArr;
  }

  return obj;
};

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
  const [skillCheckbox, setSkillCheckbox] = useState<Record<string, boolean[]>>(
    objectToCheckbox(originSkill)
  );
  // others
  const saveUma = () => {
    const newUmaData = {
      ...originUmaData,
      status,
      option,
      skill: checkboxToObject(skillCheckbox),
    };
    dispatch(updateUmaAsync([newUmaData, umaIndex]));
  };
  const restoredUma = () => {
    setStatus(originStatus);
    setOption(originOption);
    setSkillCheckbox(objectToCheckbox(originSkill));
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
