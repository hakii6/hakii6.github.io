// // top module
// import React, { useState, useEffect, useCallback } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useSelector, useDispatch } from 'react-redux';

// // UI components
// import {
//   TextField,
//   ButtonGroup,
//   Button,
//   InputLabel,
//   FormHelperText,
//   FormControl,
//   Select,
// } from '@material-ui/core';

// // child components
// import EventDialog from './EventDialog';
// import StatusForm from './StatusForm';
// import OptionForm from './OptionForm';

// // other
// import { UmaOption } from '../../types';
// import { getStorageArray, setStorageArray } from '../../functions/LocalStorage';

// const defaultUma: UmaOption = {
//   umaName: '',
//   status: {
//     speed: 1200,
//     stamina: 900,
//     power: 1200,
//     guts: 300,
//     wisdom: 300,
//   },
//   usingStyle: '1',
//   fit: {
//     surface: 'A',
//     dist: 'A',
//     style: 'A',
//   },
//   motivation: '0',
// };

// const MainForm = (): JSX.Element => {
//   const { t, i18n } = useTranslation();
//   const [umaIndex, setUmaIndex] = useState<number | null>(null);
//   const [umaData, setUmaData] = useState<UmaOption | null>(null);
//   const [umaList, setUmaList] = useState<UmaOption[] | null>(
//     getStorageArray('umaList')
//   );

//   const actionFunc = useCallback(
//     (name?: string) => {
//       let uma = defaultUma;
//       let newUmaList: UmaOption[] = umaList !== null ? [...umaList] : [];
//       switch (dialogOpen) {
//         case 'add':
//           if (typeof name !== 'undefined') {
//             uma = { ...uma, umaName: name };
//             newUmaList = newUmaList.concat(uma);
//           }
//           break;
//         case 'save':
//           if (umaIndex !== null && umaData !== null) {
//             newUmaList[umaIndex] = umaData;
//           }
//           break;
//         case 'delete':
//           newUmaList = newUmaList.filter(
//             (value: UmaOption, index: number) => index !== umaIndex
//           );
//           break;
//         case 'reset':
//           newUmaList = [];
//           break;
//         default:
//           break;
//       }
//       setUmaList(newUmaList);
//     },
//     [dialogOpen]
//   );

//   useEffect(() => {
//     if (umaIndex === null) {
//       if (umaList !== null && umaList.length !== 0) {
//         setUmaIndex(0);
//         setUmaData(umaList[0]);
//       }
//     }
//     setStorageArray('umaList', umaList, 'replace');
//   }, [umaList]);

//   return (
//     <>
//       {umaList !== null && umaIndex && umaList.length !== 0 && (
//       )}

//       {umaData && (
//         <>
//           <StatusForm umaData={umaData} setUmaData={setUmaData} />
//           <OptionForm umaData={umaData} setUmaData={setUmaData} />
//         </>
//       )}

//       {dialogOpen !== '' && (
//         <EventDialog
//           dialogOpen={dialogOpen}
//           setDialogOpen={setDialogOpen}
//           actionFunc={actionFunc}
//         />
//       )}
//     </>
//   );
// };

export {};
