// top module
import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';

// redux store
import * as actions from './racesSlice';
import { RootState } from '../../store';

// child components
import IconLinks from './IconLinks';
import UmaSetting from './umaSetting/UmaSetting';
import RaceSimulator from './raceSimulator/RaceSimulator';
import AddUmaDialog from './AddUmaDialog';

// others
import { RaceOption } from './types';

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
      case 'UmaSetting':
        return <UmaSetting />;
      case 'RaceSimulator':
        return <RaceSimulator />;
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
