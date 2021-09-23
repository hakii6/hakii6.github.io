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
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// other
import { UmaSetting } from '../../types';

import skillPassive from '../../constants/SkillPassive';

import generalSkills from '../../data/GeneralSkills';
import skillsDict from '../../data/SkillsDict';

const defaultSkills: string[] = Object.keys(generalSkills);

interface Props {
  skillCheckbox: Record<string, boolean[]>;
  setSkillCheckbox: (arg1: Record<string, boolean[]>) => void;
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

  const handleChange = (index: number, key: string) => {
    const newSkillCheckbox = { ...skillCheckbox };
    newSkillCheckbox[key][index] = !newSkillCheckbox[key][index];
    setSkillCheckbox(newSkillCheckbox);
  };

  return (
    <Grid container>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>被動技能(綠技 紫技)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <FormGroup className={classes.formGroup}>
              {skillCheckbox.passive.map((checked: boolean, index: number) => (
                <FormControlLabel
                  key={defaultSkills[index]}
                  control={
                    <Checkbox
                      key={defaultSkills[index]}
                      checked={checked}
                      onChange={() => handleChange(index, 'passive')}
                      color="primary"
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  }
                  label={
                    skillsDict[defaultSkills[index] as string].name as string
                  }
                />
              ))}
            </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

export default SkillForm;
