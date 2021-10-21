// top module
import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from 'styles';

// UI components
import { } from '@mui/material';

// child components
// import UmaSettings from 'features/umaSettings';

// redux store
// import * as Actions from '../racesSlice';
import { RootState } from 'store';

//other

interface Props {

}

const AppContainer = (props: any) => {

  const {children} = props;
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  return (
    <>
      { children }
    </>
  );
};

export default AppContainer;
