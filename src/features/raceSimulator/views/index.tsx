// top module
import React, { useState } from 'react';

// UI components
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

// child components
import UmaForm from './umaForm/index';
import ChampMeet from './champMeet/index';

const RaceSimulator = (): JSX.Element => {
  const [selectedForm, setSelectedForm] = useState('');
  return (
    <>
      <UmaForm />
      <ChampMeet />
      <br />
    </>
  );
};

export default RaceSimulator;
