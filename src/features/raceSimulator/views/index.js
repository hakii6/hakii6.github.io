import React, { useState } from 'react';

// import BaseForm from './components/BaseForm'

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import UmaForm from './forms/UmaForm';
import RaceForm from './forms/RaceForm';

// import './styles.css';

const defaultOption = {
  raceTrackId: '10009',
  raceId: '10906',
  groundCond: '1',
  weather: '1',
  season: '1',
};

const RaceSimulator = () => {
  const [no, setNo] = useState('');
  return (
    <>
      <UmaForm />
      <RaceForm defaultOption={defaultOption} />
      <br />

      { /* <Button type="submit" variant="contained" color="primary" /> */ }
    </>
  );
};

export default RaceSimulator;
