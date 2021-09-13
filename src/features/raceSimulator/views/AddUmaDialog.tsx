// top module
import React, { useState, useCallback, useEffect } from 'react';

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
import { UmaOption } from '../types';
import { getStorage, createStorage } from '../../../functions/LocalStorage';

interface Props {
  selectedForm: string;
  setSelectedForm: (arg1: string) => void;
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

const AddUmaDialog = ({
  selectedForm,
  setSelectedForm,
}: Props): JSX.Element => {
  const [umaName, setUmaName] = useState<string>('');

  const checkError = useCallback(() => {
    return umaName === '';
  }, [umaName]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUmaName(event.currentTarget.value);
  };

  const handleSubmit = () => {
    if (!checkError()) {
      createStorage('umaDataList', { ...defaultUma, umaName });
      setSelectedForm('');
    }
  };

  return (
    <Dialog
      open={selectedForm === 'AddUma'}
      onClose={() => setSelectedForm('')}
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
          error={checkError()}
          onChange={handleChange}
          helperText={checkError() ? '不能為空' : ''}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setSelectedForm('')} color="primary">
          關閉
        </Button>
        <Button
          disabled={checkError()}
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

export default AddUmaDialog;
