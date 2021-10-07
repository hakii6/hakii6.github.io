import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(
  (theme: Theme) => ({
  root: {
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
  gridItem: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  formControl: {
    minWidth: 120,
  },
  })
);

export default useStyles;
