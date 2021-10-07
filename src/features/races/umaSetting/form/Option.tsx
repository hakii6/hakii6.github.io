// top module
import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from './styles';

// UI components
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
import { UmaSetting } from '../types';

interface Props {
  option: UmaSetting['option'];
  setOption: (arg1: UmaSetting['option']) => void;
}

const OptionForm = ({ option, setOption }: Props): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  // others
  const handleChange = (
    e: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setOption({
      ...option,
      [e.target.name as string]: e.target.value,
    });
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={6} className={classes.gridItem}>
        <FormControl required className={classes.formControl}>
          <InputLabel id="style-label">{t('Uma.style')}</InputLabel>
          <Select
            autoWidth
            displayEmpty
            labelId="style-label"
            id="style"
            name="style"
            value={option.style}
            onChange={handleChange}
            className={classes.select}
          >
            <MenuItem value="1">逃</MenuItem>
            <MenuItem value="2">先</MenuItem>
            <MenuItem value="3">差</MenuItem>
            <MenuItem value="4">追</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} className={classes.gridItem}>
        <FormControl required className={classes.formControl}>
          <InputLabel id="motivation-label">{t('Uma.motivation')}</InputLabel>
          <Select
            autoWidth
            displayEmpty
            labelId="motivation-label"
            id="motivation"
            name="motivation"
            value={option.motivation}
            onChange={handleChange}
            className={classes.select2}
          >
            <MenuItem value="0">絕好調</MenuItem>
            <MenuItem value="1">好調</MenuItem>
            <MenuItem value="2">普通</MenuItem>
            <MenuItem value="3">不調</MenuItem>
            <MenuItem value="4">絕不調</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default OptionForm;
