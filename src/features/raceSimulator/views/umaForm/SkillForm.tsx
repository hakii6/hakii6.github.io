// top module
import React, { useState, useCallback } from 'react';
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
} from '@material-ui/core';

// other
import { UmaOption } from '../../types';

import SkillDataGeneral from '../../constants/SkillDataGeneral';
// import SkillDataGeneral from '../../objects/Skills';

// const stringToArray = (str) => {
//   str
// }

// console.log(SkillDataGeneral.map((skillData, index) => ({
//   ...skillData,
//   actCond: skillData.actCond
// })));

interface Props {
  umaData: UmaOption;
  setUmaData: (arg1: UmaOption) => void;
}

const useStyles = makeStyles((theme) => ({}));

const SkillForm = ({ umaData, setUmaData }: Props): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  // others
  const handleChange = (
    e: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setUmaData({ ...umaData, [String(e.target.name)]: e.target.value });
  };

  return <Grid container>aaaaaa</Grid>;
};

export default SkillForm;
