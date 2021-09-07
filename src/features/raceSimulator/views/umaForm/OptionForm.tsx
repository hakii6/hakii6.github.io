// top module
import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

// UI components
import {
  TextField,
  ButtonGroup,
  Button,
  InputLabel,
  FormHelperText,
  FormControl,
  Select,
} from '@material-ui/core';

// other
import { UmaOption } from '../../types';

interface Props {
  umaData: UmaOption;
  setUmaData: (arg1: UmaOption) => void;
}

const OptionForm = ({ umaData, setUmaData }: Props): JSX.Element => {
  const { t, i18n } = useTranslation();
  const handleChange = (
    e: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setUmaData({ ...umaData, [String(e.target.name)]: e.target.value });
  };

  return (
    <form>
      <FormControl required>
        <InputLabel id="usingStyle-label">跑法</InputLabel>
        <Select
          native
          labelId="usingStyle-label"
          id={t('Uma.usingStyle')}
          name="usingStyle"
          value={umaData.usingStyle}
          onChange={handleChange}
        >
          <option value="1">逃</option>
          <option value="2">先</option>
          <option value="3">差</option>
          <option value="4">追</option>
        </Select>
      </FormControl>
      <FormControl required>
        <InputLabel id="motivation-label">心情</InputLabel>
        <Select
          native
          labelId="motivation-label"
          id={t('Uma.motivation')}
          name="motivation"
          value={umaData.motivation}
          onChange={handleChange}
        >
          <option value="0">絕好調</option>
          <option value="1">好調</option>
          <option value="2">普通</option>
          <option value="3">不調</option>
          <option value="4">絕不調</option>
        </Select>
      </FormControl>
    </form>
  );
};

export default OptionForm;
