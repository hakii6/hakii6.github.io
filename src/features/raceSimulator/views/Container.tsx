// top module
import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

// UI components
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// redux store
import * as actions from '../raceSimulatorSlice';
import { RootState } from '../../../store';

// child components
import IconLinks from './IconLinks';
import UmaForm from './umaForm/index';
import ChampMeet from './champMeet/index';
import AddUmaDialog from './AddUmaDialog';

// others
import { UmaSetting, RaceOption } from '../types';

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  gridItem: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    justifyContent: 'center',
    textAlign: 'center',
  },
  fab: {
    fontSize: 20,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Container = (): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  // state & selector
  const [selectedForm, setSelectedForm] = useState('');

  const formObj = useMemo(() => {
    switch (selectedForm) {
      case 'AddUma':
        return (
          <AddUmaDialog
            selectedForm={selectedForm}
            setSelectedForm={setSelectedForm}
          />
        );
      case 'UmaForm':
        return <UmaForm />;
      case 'ChampMeet':
        return <ChampMeet />;
      default:
        return <div />;
    }
  }, [selectedForm]);

  return (
    <>
      <IconLinks setSelectedForm={setSelectedForm} />
      {formObj}
    </>
  );
};

export default Container;
