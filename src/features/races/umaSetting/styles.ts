import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(
  (theme: Theme) => ({
  root: {
    spacing: theme.spacing(3),
        textAlign: 'center',
    alignItems: 'center',
  },
  gridItem: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  formControl: {
    minWidth: 120,
  },
  formGroup: {
    marginLeft: theme.spacing(70),
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
  })
);

export default useStyles;
