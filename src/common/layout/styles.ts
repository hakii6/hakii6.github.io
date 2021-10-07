import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(
  (theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  themeButton: {
    marginLeft: theme.spacing(2),
    color: theme.palette.background.default,
  },
  paper: {
    marginTop: theme.spacing(2),
    elevation: 3,
  },
  })
);

export default useStyles;
