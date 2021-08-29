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

interface Props {
  dialogOpen: string,
  setDialogOpen: (arg0: string) => void,
  actionFunc: (name?: string) => void,
}

const UmaEventDialog = ({
  dialogOpen,
  setDialogOpen,
  actionFunc,
}: Props) => {
  const [umaName, setUmaName] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
          <Button onClick={() => { actionFunc(umaName); setDialogOpen(''); }} color="primary">
            Enter
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={dialogOpen !== 'add'} onClose={() => setDialogOpen('')} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          { dialogOpen }
          ?
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => setDialogOpen('')} color="primary">
            Cancel
          </Button>
          <Button onClick={() => { actionFunc(); setDialogOpen(''); }} color="primary">
            Enter
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UmaEventDialog;

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
