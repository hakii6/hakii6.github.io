import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export default makeStyles((theme: Theme) => ({
  root: {},
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  formGroup: {
    marginLeft: theme.spacing(70),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  formControl: {
    minWidth: 120,
  },
  gridItem: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    justifyContent: 'center',
    textAlign: 'center',
  },
  fab: {
    fontSize: 20,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  select: {
    paddingLeft: theme.spacing(2),
    textAlign: 'left',
  },
  select2: {
    paddingLeft: theme.spacing(1),
    textAlign: 'left',
  },
  textField: {
    padding: theme.spacing(1),
  },
  themeButton: {
    marginLeft: theme.spacing(2),
    color: theme.palette.background.default,
  },
}));
