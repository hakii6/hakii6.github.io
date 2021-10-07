// top module
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';

// UI components
import {
  TextField,
  Button,
  InputLabel,
  FormHelperText,
  FormControl,
  Select,
  NativeSelect,
  MenuItem,
  Grid,
} from '@material-ui/core';

// redux store
import { RootState } from '../../../store';
import * as raceSimulatorActions from '../racesSlice';

// other
import { RaceOption } from '../types';
import CourseDataGeneral from '../../../data/CourseDataGeneral.json';
import CourseData from '../../../data/CourseData.json';

interface Props {
  raceOption: RaceOption;
  setRaceOption: (raceOption: RaceOption) => void;
}

const raceTrackList = CourseDataGeneral.map(({ id, name }) => (
  <MenuItem key={id} value={id}>
    {name}
  </MenuItem>
));

const selectedRaceTrack = (raceTrackId: string) =>
  CourseDataGeneral.find((raceTrack) => raceTrackId === raceTrack.id);

const RaceForm = ({ raceOption, setRaceOption }: Props): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = (
    e: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setRaceOption({
      ...raceOption,
      [e.target.name as string]: e.target.value,
    });
  };

  const handleRaceTrackChange = (
    e: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const newRaceTrackId = e.target.value as string;
    const raceTrack = selectedRaceTrack(newRaceTrackId);
    setRaceOption({
      ...raceOption,
      raceTrackId: newRaceTrackId,
      raceId: raceTrack!.courses[0].id,
    });
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} className={classes.gridItem}>
          <FormControl required className={classes.formControl}>
            <InputLabel id="raceTrackId-label">
              {t('RaceOption.raceTrackId')}
            </InputLabel>
            <Select
              labelId="raceTrackId-label"
              id="raceTrackId"
              name="raceTrackId"
              value={raceOption.raceTrackId}
              onChange={handleRaceTrackChange}
            >
              {raceTrackList}
            </Select>
          </FormControl>
          <FormControl required className={classes.formControl}>
            <InputLabel id="raceId-label">{t('RaceOption.raceId')}</InputLabel>
            <Select
              labelId="raceId-label"
              id="raceId"
              name="raceId"
              value={raceOption.raceId}
              onChange={handleChange}
            >
              {selectedRaceTrack(raceOption.raceTrackId)!.courses.map(
                ({ id, name }) => (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <FormControl required className={classes.formControl}>
            <InputLabel id="season-label">{t('RaceOption.season')}</InputLabel>
            <Select
              labelId="season-label"
              id="season"
              name="season"
              value={raceOption.season}
              onChange={handleChange}
            >
              <MenuItem value="1">春</MenuItem>
              <MenuItem value="2">夏</MenuItem>
              <MenuItem value="3">秋</MenuItem>
              <MenuItem value="4">冬</MenuItem>
            </Select>
          </FormControl>
          <FormControl required className={classes.formControl}>
            <InputLabel id="weather-label">
              {t('RaceOption.weather')}
            </InputLabel>
            <Select
              labelId="weather-label"
              id="weather"
              name="weather"
              value={raceOption.weather}
              onChange={handleChange}
            >
              <MenuItem value="0">晴</MenuItem>
              <MenuItem value="1">陰</MenuItem>
              <MenuItem value="2">雨</MenuItem>
              <MenuItem value="3">雪</MenuItem>
            </Select>
          </FormControl>
          <FormControl required className={classes.formControl}>
            <InputLabel id="groundCond-label">
              {t('RaceOption.groundCond')}
            </InputLabel>
            <Select
              labelId="groundCond-label"
              id="groundCond"
              name="groundCond"
              value={raceOption.groundCond}
              onChange={handleChange}
            >
              <MenuItem value="0">良</MenuItem>
              <MenuItem value="1">稍重</MenuItem>
              <MenuItem value="2">重</MenuItem>
              <MenuItem value="3">不良</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default RaceForm;
