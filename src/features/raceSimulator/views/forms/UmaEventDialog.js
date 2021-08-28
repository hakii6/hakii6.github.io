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

const DialogTemp = ({
  dialogOpen,
  setDialogOpen,
  actionName,
  enterFunc,
}) => (
  <Dialog open={dialogOpen === actionName} onClose={() => setDialogOpen('')} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">
      { actionName }
      ?
    </DialogTitle>
    <DialogActions>
      <Button onClick={() => setDialogOpen('')} color="primary">
        Cancel
      </Button>
      <Button onClick={() => { enterFunc(); setDialogOpen(''); }} color="primary">
        Enter
      </Button>
    </DialogActions>
  </Dialog>
);

const UmaEventDialog = (
  {
    dialogOpen, setDialogOpen, saveUma, addUma, deleteUma,
  },
) => {
  const [umaName, setUmaName] = useState('');
  const handleChange = (event) => {
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
          <Button onClick={() => { addUma(umaName); setDialogOpen(''); }} color="primary">
            Enter
          </Button>
        </DialogActions>
      </Dialog>
      <DialogTemp
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        actionName="save"
        enterFunc={saveUma}
      />
      <DialogTemp
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        actionName="delete"
        enterFunc={deleteUma}
      />
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
