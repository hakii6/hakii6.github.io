// top module
import React, { useState, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

// UI components
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  TextField,
  ButtonGroup,
  Button,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

// child components
import SkillFormCheckbox from './SkillFormCheckbox';

// other
import { UmaSetting } from '../../types';

import skillPassive from '../../constants/SkillPassive';
import skillPassiveDict from '../../constants/SkillPassiveDict';

const defaultSkill = skillPassive.reduce(
  (preVal, curVal) => ({
    ...preVal,
    [curVal.id]: '-1',
  }),
  {}
);

interface Props {
  skill: UmaSetting['skill'];
  setSkill: (arg1: UmaSetting['skill']) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {},
  formGroup: {
    marginLeft: theme.spacing(70),
  },
}));

const SkillForm = ({ skill, setSkill }: Props): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  // others
  // const handleChange = (id: string, rarity: string) => {
  //   const newPassiveSkills = { ...passiveSkills };
  //   console.log(newPassiveSkills);
  //   newPassiveSkills[id] = newPassiveSkills[id] === rarity ? '-1' : rarity;
  //   setSkill({
  //     ...skill,
  //     passiveSkills: newPassiveSkills,
  //   });
  // };

  return (
    <Grid container>
      <FormGroup className={classes.formGroup}>asdqwe</FormGroup>
    </Grid>
  );
};

export default SkillForm;

// {Object.entries(skill.passiveSkills).map(
//   ([skillClassId, selectedRarity]: [string, string], index: number) => (
//     <SkillFormCheckbox
//       key={skillClassId}
//       skillClass={skillPassiveDict[skillClassId]}
//       selectedRarity={selectedRarity}
//       handleChange={handleChange}
//     />
//   )
// )}
