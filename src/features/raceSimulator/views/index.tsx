import React, { useState } from 'react';

// import BaseForm from './components/BaseForm'

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import UmaForm from './umaForm/index';
import ChampMeet from './champMeet/index';

// import './styles.css';

const RaceSimulator = () => {
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
