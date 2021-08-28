import React, { useState, useCallback } from 'react';

import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';

const UmaEventDialog = ({ dialogOpen, setDialogOpen, initCurrentUma }: any) => {
  const [umaName, setUmaName] = useState('');

  const handleSubmit = () => {
    initCurrentUma(umaName);
  };

  const handleChange = (event: React.ChangeEvent<{value: string}>) => {
    setUmaName(event.currentTarget.value);
  };

  return (
    <>
      <Dialog open={dialogOpen === 'add'} onClose={() => setDialogOpen('')} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter Uma Name:
          </DialogContentText>
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
          <Button onClick={() => setDialogOpen('')} color="primary">
            Cancel
          </Button>
          <Button onClick={() => { handleSubmit(); setDialogOpen(''); }} color="primary">
            Enter
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UmaEventDialog;
