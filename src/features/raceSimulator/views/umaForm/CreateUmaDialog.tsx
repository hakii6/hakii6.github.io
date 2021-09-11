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
  dialogOpen: boolean;
  setDialogOpen: (arg1: boolean) => void;
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

const CreateUmaDialog = ({ dialogOpen, setDialogOpen }: Props): JSX.Element => {
  const [umaName, setUmaName] = useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUmaName(event.currentTarget.value);
  };

  const handleSubmit = () => {
    createStorage('umaDataList', { ...defaultUma, umaName });
    setDialogOpen(false);
  };

  return (
    <Dialog
      open={dialogOpen === true}
      onClose={() => setDialogOpen(false)}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">輸入馬娘名字</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="umaName"
          name="umaName"
          value={umaName}
          label="馬娘名字"
          type="string"
          onChange={handleChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setDialogOpen(false)} color="primary">
          關閉
        </Button>
        <Button
          onClick={() => {
            handleSubmit();
          }}
          color="primary"
        >
          確定
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateUmaDialog;
