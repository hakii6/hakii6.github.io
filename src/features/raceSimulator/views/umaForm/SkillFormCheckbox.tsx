// top module
import React, { useState, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

// UI components
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  TextField,
  ButtonGroup,
  Button,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

// other
import { UmaSetting } from '../../types';

interface Props {
  skillClass: any;
  selectedRarity: string;
  handleChange: (id: string, rarity: string) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {},
  formGroup: {
    marginLeft: theme.spacing(70),
  },
}));

const SkillFormCheckbox = ({
  skillClass,
  selectedRarity,
  handleChange,
}: Props): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <>
      {Object.entries(skillClass.rarity).map(
        ([rarityKey, skill]: [string, any]) => (
          <FormControlLabel
            key={rarityKey}
            control={
              <Checkbox
                id={skill.id}
                name={skill.name}
                checked={selectedRarity === rarityKey}
                onChange={() => handleChange(skillClass.id, rarityKey)}
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            }
            label={skill.name}
          />
        )
      )}
    </>
  );
};

export default SkillFormCheckbox;
