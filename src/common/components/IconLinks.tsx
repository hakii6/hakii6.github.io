// // top module
// import React, { useState, useMemo, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useTranslation } from 'react-i18next';
// import useStyles from '@styles';

// // UI components
// import { Fab, Grid } from '@mui/material';
// import {
//   Add as AddIcon,
//   Edit as EditIcon,
//   DirectionsRun as DirectionsRunIcon,
// } from '@mui/icons-material';

// // redux store
// import { RootState } from '@store';

// interface Props {
//   setSelectedForm: (arg1: string) => void;
// }

// const IconLinks = ({ setSelectedForm }: Props): JSX.Element => {
//   // common hooks
//   const { t, i18n } = useTranslation();
//   const dispatch = useDispatch();
//   const classes = useStyles();

//   // state & selector
//   // const umaDataList = useSelector(
//   //   (state: RootState) => state.raceSimulator.umaDataList
//   // );

//   return (
//     <>
//       <Grid container direction="row" className={classes.root}>
//         <Grid item xs={4} className={classes.gridItem}>
//           <Fab
//             className={classes.fab}
//             color="primary"
//             aria-label="UmaForm"
//             onClick={() => setSelectedForm('UmaSetting')}
//             // disabled={!umaDataList.length}
//             variant="extended"
//           >
//             <EditIcon className={classes.extendedIcon} />
//             {t('馬娘設定')}
//           </Fab>
//         </Grid>
//         <Grid item xs={4} className={classes.gridItem}>
//           <Fab
//             className={classes.fab}
//             color="primary"
//             aria-label="ChampMeet"
//             // disabled={!umaDataList.length}
//             onClick={() => setSelectedForm('RaceSimulator')}
//             variant="extended"
//           >
//             <DirectionsRunIcon className={classes.extendedIcon} />
//             {t('比賽模擬')}
//           </Fab>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default IconLinks;
export {};
