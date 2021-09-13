// top module
import React, { useState, useCallback } from 'react';

// UI components
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';

// other
import { UmaOption } from '../../types';
import { getStorage, createStorage } from '../../../../functions/LocalStorage';

interface Props {
  dialogOpen: string | null;
  setDialogOpen: (arg1: string | null) => void;
}

const defaultUma: UmaOption = {
  umaName: '',
  status: {
    speed: 1200,
    stamina: 900,
    power: 1200,
    guts: 300,
    wisdom: 300,
  },
  usingStyle: '1',
  fit: {
    surface: 'A',
    dist: 'A',
    style: 'A',
  },
  motivation: '0',
};

const EventDialog = ({ dialogOpen, setDialogOpen }: Props): JSX.Element => {
  const [umaName, setUmaName] = useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUmaName(event.currentTarget.value);
  };

  const handleSubmit = () => {
    createStorage('umaDataList', { ...defaultUma, umaName });
  };

  return (
    <>
      <Dialog
        open={dialogOpen === 'add'}
        onClose={() => setDialogOpen(null)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">輸入馬娘名字</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="umaName"
            value={umaName}
            label="馬娘名字"
            type="string"
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(null)} color="primary">
            關閉
          </Button>
          <Button
            onClick={() => {
              handleSubmit();
              setDialogOpen(null);
            }}
            color="primary"
          >
            確定
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={dialogOpen !== 'add'}
        onClose={() => setDialogOpen(null)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{dialogOpen}?</DialogTitle>
        <DialogActions>
          <Button onClick={() => setDialogOpen(null)} color="primary">
            關閉
          </Button>
          <Button
            onClick={() => {
              setDialogOpen(null);
            }}
            color="primary"
          >
            確定
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EventDialog;

// <Dialog open={dialogOpen === 'save'}
// onClose={() => setDialogOpen('')} aria-labelledby="form-dialog-title">
//   <DialogTitle id="form-dialog-title">確認儲存嗎</DialogTitle>
//   <DialogActions>
//     <Button onClick={() => setDialogOpen('')} color="primary">
//       Cancel
//     </Button>
//     <Button onClick={() => { saveUma(); setDialogOpen(''); }} color="primary">
//       Enter
//     </Button>
//   </DialogActions>
// </Dialog>
