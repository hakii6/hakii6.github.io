import React, {
  useState, useEffect, useMemo, useCallback,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  TextField,
  Button,
  InputLabel,
  FormHelperText,
  FormControl,
  Select,
  NativeSelect,
} from '@material-ui/core';

import CourseDataGeneral from '../../CourseDataGeneral.json';
import CourseData from '../../CourseData.json';

import { RaceOption } from '../../types';
import { getStorageObject, setStorageObject } from '../../customFunctions';

import * as raceSimulatorActions from '../../raceSimulatorSlice';

const defaultOption: RaceOption = {
  raceTrackId: '10009',
  raceId: '10906',
  groundCond: '1',
  weather: '1',
  season: '1',
};

const initOption = (): RaceOption => {
  const raceOption = getStorageObject('raceOption') as RaceOption | null;
  return raceOption !== null ? raceOption : defaultOption;
};

const RaceForm = () => {
  const dispatch = useDispatch();
  const [option, setOption] = useState<RaceOption>(initOption());

  const raceTrackList = useMemo(() => CourseDataGeneral.map(
    ({ id, name }) => (
      <option key={id} value={id}>
        { name }
      </option>
    ),
  ), []);

  const raceList = useMemo(() => {
    const selectedRaceTrack = CourseDataGeneral.find(
      (raceTrack) => raceTrack.id === option.raceTrackId,
    );
    if (selectedRaceTrack !== undefined) {
      return selectedRaceTrack.courses.map(({ id, name }) => (
        <option key={id} value={id}>
          { name }
        </option>
      ));
    }
    return <></>;
  }, [option.raceTrackId]);

  const handleChange = (e: React.ChangeEvent<{ name?:string, value: unknown }>) => {
    setOption({
      ...option,
      [e.target.name as string]: e.target.value,
    });
  };

  const handleClick = (e: any) => {
    dispatch(raceSimulatorActions.saveRace(option));
  };

  useEffect(() => {
    setStorageObject('raceOption', option, 'replace');
  }, [handleClick]);

  return (
    <>
      <FormControl required>
        <InputLabel id="raceTrackId-label">賽馬場</InputLabel>
        <Select
          native
          labelId="raceTrackId-label"
          id="raceTrackId"
          name="raceTrackId"
          value={option.raceTrackId}
          onChange={handleChange}
        >
          { raceTrackList }
        </Select>
      </FormControl>

      <FormControl required>
        <InputLabel id="raceId-label">賽道</InputLabel>
        <Select
          native
          labelId="raceId-label"
          id="raceId"
          name="raceId"
          value={option.raceId}
          onChange={handleChange}
        >
          { raceList }
        </Select>
      </FormControl>

      <FormControl required>
        <InputLabel id="season-label">季節</InputLabel>
        <Select
          native
          labelId="season-label"
          id="season"
          name="season"
          value={option.season}
          onChange={handleChange}
        >
          <option value="1">春</option>
          <option value="2">夏</option>
          <option value="3">秋</option>
          <option value="4">冬</option>
        </Select>
      </FormControl>

      <FormControl required>
        <InputLabel id="weather-label">天氣</InputLabel>
        <Select
          native
          labelId="weather-label"
          id="weather"
          name="weather"
          value={option.weather}
          onChange={handleChange}
        >
          <option value="0">晴</option>
          <option value="1">陰</option>
          <option value="2">雨</option>
          <option value="3">雪</option>
        </Select>
      </FormControl>

      <FormControl required>
        <InputLabel id="groundCond-label">場地狀況</InputLabel>
        <Select
          native
          labelId="groundCond-label"
          id="groundCond"
          name="groundCond"
          value={option.groundCond}
          onChange={handleChange}
        >
          <option value="0">良</option>
          <option value="1">稍重</option>
          <option value="2">重</option>
          <option value="3">不良</option>
        </Select>
      </FormControl>

      <Button variant="contained" color="primary" onClick={handleClick}>save Race</Button>
    </>
  );
};

export default RaceForm;

// { CourseDataGeneral
// //   && CourseDataGeneral.map((track, index) =>
// <option key={index} value={index}>{track.name}</option>) }
