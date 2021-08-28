import React, {
  useState, useEffect, useMemo, useCallback,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import NativeSelect from '@material-ui/core/NativeSelect';

import CourseDataGeneral from '../../CourseDataGeneral.json';
import CourseData from '../../CourseData.json';

// import { useAppSelector, useAppDispatch } from 'app/hooks'

interface OptionProps {
  defaultOption: {
    raceTrackId: string,
    raceId: string,
    groundCond: string,
    weather: string,
    season: string,
  },
}

const RaceForm = ({ defaultOption }: OptionProps) => {
  const [option, setOption] = useState(defaultOption);

  const raceTrackList = useMemo(() => CourseDataGeneral.map(
    ({ id, name }: any) => (
      <option key={id} value={id}>
        { name }
      </option>
    ),
  ), []);

  const raceList = useMemo(() => {
    const selectedRaceTrack = CourseDataGeneral.filter(
      (raceTrack) => raceTrack.id === option.raceTrackId,
    );
    return selectedRaceTrack[0].courses.map(({ id, name }) => (
      <option key={id} value={id}>
        { name }
      </option>
    ));
  }, [option.raceTrackId]);

  const handleTrackChange = (event: React.ChangeEvent<{ value: any }>) => {
    setOption({
      ...option,
      raceTrackId: event.currentTarget.value,
    });
  };

  const handleRaceChange = (event: React.ChangeEvent<{ value: any }>) => {
    setOption({
      ...option,
      raceId: event.currentTarget.value,
    });
  };

  const handleChange = (property: string, e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption({
      ...option,
      [property]: e,
    });
  };

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
          onChange={handleTrackChange}
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
          onChange={handleRaceChange}
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
          onChange={
            (e: React.ChangeEvent<{
              name?: string | undefined, value: any
            }>): void => handleChange('season', e.target.value)
          }
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
          onChange={
            (e: React.ChangeEvent<{
              name?: string | undefined, value: any
            }>): void => handleChange('weather', e.target.value)
          }
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
          onChange={
            (e: React.ChangeEvent<{
              name?: string | undefined, value: any
            }>): void => handleChange('groundCond', e.target.value)
          }
        >
          <option value="0">良</option>
          <option value="1">稍重</option>
          <option value="2">重</option>
          <option value="3">不良</option>
        </Select>
      </FormControl>

    </>
  );
};

export default RaceForm;

// { CourseDataGeneral
// //   && CourseDataGeneral.map((track, index) =>
// <option key={index} value={index}>{track.name}</option>) }
