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

const defaultSkill = Object.keys(skillPassiveDict);

interface Props {
  skillCheckbox: boolean[];
  setSkillCheckbox: (arg1: boolean[]) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {},
  formGroup: {
    marginLeft: theme.spacing(70),
  },
}));

const SkillForm = ({ skillCheckbox, setSkillCheckbox }: Props): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = (index: number) => {
    const newSkillCheckbox = [...skillCheckbox];
    newSkillCheckbox[index] = !newSkillCheckbox[index];
    setSkillCheckbox(newSkillCheckbox);
  };

  return (
    <Grid container>
      <FormGroup className={classes.formGroup}>
        {skillCheckbox.map((checked: boolean, index: number) => (
          <FormControlLabel
            key={defaultSkill[index]}
            control={
              <Checkbox
                key={defaultSkill[index]}
                checked={checked}
                onChange={() => handleChange(index)}
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            }
            label={skillPassiveDict[defaultSkill[index]]}
          />
        ))}
      </FormGroup>
    </Grid>
  );
};

export default SkillForm;
