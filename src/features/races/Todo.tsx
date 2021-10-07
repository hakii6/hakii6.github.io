// top module
import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';

const Todo = (): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>未實裝:</h1>
      <h2>完場結果回報</h2>
      <h2>加減速 上下坡展現</h2>
      <h2>下坡加速</h2>
      <h2>開技能使位置意識強行改變</h2>
      <h2>中掛時腳質改變</h2>
      <h2>賢隨機速度(目前直接取平均)</h2>
      <h2>内側移動補正</h2>
      <h2>技能</h2>
    </>
  );
};

export default Todo;
