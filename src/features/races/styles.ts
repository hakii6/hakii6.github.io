import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
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
  })
);

export default useStyles;
