// // top module
// import React, { useState, useMemo, useEffect, useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useTranslation } from 'react-i18next';

// // UI components
// import { createStyles, makeStyles, Theme } from '@mui/material/styles';
// import {
//   TextField,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
// } from '@mui/material';

// // redux store
// import * as actions from '../raceSimulatorSlice';
// import { createUmaAsync } from '../raceSimulatorSlice';
// import { RootState } from '@store';

// // other
// import { UmaSetting } from '../types';
// import { getStorage, createStorage } from '../../../functions/LocalStorage';

// interface Props {
//   selectedForm: string;
//   setSelectedForm: (arg1: string) => void;
// }

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {},
// }));

// const AddUmaDialog = ({
//   selectedForm,
//   setSelectedForm,
// }: Props): JSX.Element => {
//   // common hooks
//   const { t, i18n } = useTranslation();
//   const dispatch = useDispatch();
//   const classes = useStyles();

//   // state
//   const [name, setName] = useState<string>('');

//   // callback
//   const checkError = useCallback(() => {
//     return name === '';
//   }, [name]);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setName(event.currentTarget.value);
//   };

//   const handleSubmit = () => {
//     if (!checkError()) {
//       dispatch(createUmaAsync(name));
//       setSelectedForm('');
//     }
//   };

//   return (
//     <Dialog
//       open={selectedForm === 'AddUma'}
//       onClose={() => setSelectedForm('')}
//       aria-labelledby="form-dialog-title"
//     >
//       <DialogTitle id="form-dialog-title">輸入馬娘名字</DialogTitle>
//       <DialogContent>
//         <TextField
//           autoFocus
//           margin="dense"
//           id="name"
//           name="name"
//           value={name}
//           label="馬娘名字"
//           type="string"
//           error={checkError()}
//           onChange={handleChange}
//           helperText={checkError() ? '不能為空' : ''}
//           fullWidth
//         />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={() => setSelectedForm('')} color="primary">
//           關閉
//         </Button>
//         <Button
//           disabled={checkError()}
//           onClick={() => {
//             handleSubmit();
//           }}
//           color="primary"
//         >
//           確定
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default AddUmaDialog;

export {};
