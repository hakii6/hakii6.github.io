// top module
import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from 'styles';

// UI components
import {} from '@mui/material';

// child components
// import UmaSettings from 'features/umaSettings';

// redux store
// import * as Actions from '../racesSlice';
import { RootState } from 'store';

//other

interface Props {}

const IconButtons = () => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <>
      qejiwojqwoie
      {/*      <Grid container direction="row" className={classes.root}>
        <Grid item xs={4} className={classes.gridItem}>
          <Fab
            className={classes.fab}
            color="primary"
            aria-label="UmaForm"
            onClick={() => setSelectedForm('UmaSetting')}
            disabled={!umaDataList.length}
            variant="extended"
          >
            <EditIcon className={classes.extendedIcon} />
            {t('馬娘設定')}
          </Fab>
        </Grid>
        <Grid item xs={4} className={classes.gridItem}>
          <Fab
            className={classes.fab}
            color="primary"
            aria-label="ChampMeet"
            disabled={!umaDataList.length}
            onClick={() => setSelectedForm('RaceSimulator')}
            variant="extended"
          >
            <DirectionsRunIcon className={classes.extendedIcon} />
            {t('比賽模擬')}
          </Fab>
        </Grid>
      </Grid>*/}
    </>
  );
};

export default IconButtons;
