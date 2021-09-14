// top module
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

// UI components
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
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
import { RootState } from '../../../../store';
import * as raceSimulatorActions from '../../raceSimulatorSlice';

// other
import { RaceOption } from '../../types';
import CourseDataGeneral from '../../../../data/CourseDataGeneral.json';
import CourseData from '../../../../data/CourseData.json';
import {
  getSingleStorage,
  setSingleStorage,
} from '../../../../functions/LocalStorage';

interface Props {
  raceOption: RaceOption;
  setRaceOption: (raceOption: RaceOption) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {},
  gridItem: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  formControl: {
    minWidth: 120,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
}));

const RaceForm = ({ raceOption, setRaceOption }: Props): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  // state & selector
  const savedOption = useSelector(
    (state: RootState) => state.raceSimulator.raceOption
  );

  // callback & memo
  const raceTrackList = useMemo(
    () =>
      CourseDataGeneral.map(({ id, name }) => (
        <MenuItem key={id} value={id}>
          {name}
        </MenuItem>
      )),
    []
  );
  const raceList = useMemo(() => {
    const selectedRaceTrack = CourseDataGeneral.find(
      (raceTrack) => raceTrack.id === raceOption.raceTrackId
    );
    if (selectedRaceTrack !== undefined) {
      const selectedRace = selectedRaceTrack.courses.find(
        (race) => race.id === raceOption.raceId
      );
      if (selectedRace !== undefined) {
        setRaceOption({
          ...raceOption,
          raceId: selectedRace.id,
        });
      } else {
        setRaceOption({
          ...raceOption,
          raceId: selectedRaceTrack.courses[0].id,
        });
      }
      return selectedRaceTrack.courses.map(({ id, name }) => (
        <MenuItem key={id} value={id}>
          {name}
        </MenuItem>
      ));
    }
    return <></>;
  }, [raceOption.raceTrackId]);

  const handleChange = (
    e: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setRaceOption({
      ...raceOption,
      [e.target.name as string]: e.target.value,
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
              onChange={handleChange}
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
              {raceList}
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

// { CourseDataGeneral
// //   && CourseDataGeneral.map((track, index) =>
// <MenuItem key={index} value={index}>{track.name}</MenuItem>) }
