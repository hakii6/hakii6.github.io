// top module
import React, { useState } from 'react';

// UI components
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

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
      <h1>未實裝:</h1>
      <h2>下坡加速</h2>
      <h2>開技能使位置意識強行改變</h2>
      <h2>中掛時腳質改變</h2>
      <h2>賢隨機速度(目前直接取平均)</h2>
      <h2>内側移動補正</h2>
      <h2>技能</h2>
    </>
  );
};

export default RaceSimulator;
