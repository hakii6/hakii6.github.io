// top module
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

// UI components
import { styled } from '@mui/material/styles';
import { } from '@mui/material';

// child components
import AppBar from './AppBar';
// import AppNavDrawer from './AppNavDrawer';
import AppContainer from './AppContainer';

// redux store
// import * as Actions from '../racesSlice';
import { RootState } from 'store';

//other

interface Props {

}

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'disablePermanent',
})(({ disablePermanent, theme }) => {
  return {
    padding: '0 2px',
    transition: theme.transitions.create('width'),
    ...(disablePermanent && {
      boxShadow: 'none',
    }),
    ...(!disablePermanent && {
      [theme.breakpoints.up('lg')]: {
        width: 'calc(100% - 240px)',
      },
    }),
    boxShadow: 'none',
    borderStyle: 'solid',
    borderColor:
      theme.palette.mode === 'dark' ? theme.palette.primaryDark[700] : theme.palette.grey[100],
    borderWidth: 0,
    borderBottomWidth: 'thin',
    background: theme.palette.mode === 'dark' ? theme.palette.primaryDark[900] : '#FFF',
    color: theme.palette.mode === 'dark' ? theme.palette.grey[500] : theme.palette.grey[800],
    '& .MuiIconButton-root': {
      border: `1px solid ${
        theme.palette.mode === 'dark' ? theme.palette.primaryDark[600] : theme.palette.grey[200]
      }`,
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.mode === 'dark' ? '#FFF' : theme.palette.primary[500],
      background: theme.palette.mode === 'dark' ? theme.palette.primaryDark[800] : '#FFF',
    },
  };
});

// const StyledAppNavDrawer = styled(AppNavDrawer)(({ disablePermanent, theme }) => {
//   if (disablePermanent) {
//     return {};
//   }
//   return {
//     [theme.breakpoints.up('lg')]: {
//       flexShrink: 0,
//       width: 240,
//     },
//   };
// });

const StyledAppContainer = styled(AppContainer)(({ theme }) => {
  return {
    display: 'flex',
    width: '100%',
    paddingTop: 80 + 20,
    [theme.breakpoints.up('md')]: {
      // We're mostly hosting text content so max-width by px does not make sense considering font-size is system-adjustable.
      // 94ch ≈ 902px (theme.breakpoints.values.md) using 16px IBM Plex Sans
      // TODO Does it make sense to create breakpoints based on `ch`?
      maxWidth: '94ch',
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
    },
  };
});
const RootDiv = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    background: theme.palette.grey[900],
    // TODO: Should be handled by the main component
    '& #main-content': {
      outline: 0,
    },
  };
});
const AppFrame = (props: any) => {
  // common hooks
  const { t, i18n } = useTranslation();

  const { children, disableDrawer = false } = props;
  const [ mobileOpen, setMobileOpen ] = React.useState(false);

  const handleNavDrawerOpen = () => {
    setMobileOpen(true);
  };
  const handleNavDrawerClose = React.useCallback(() => {
    setMobileOpen(false);
  }, []);

  const disablePermanent = disableDrawer === true;

  return (
    <>
      <RootDiv>
      <StyledAppBar disablePermanent={disablePermanent} />
{/*      <StyledAppNavDrawer
        disablePermanent={disablePermanent}
        onClose={handleNavDrawerClose}
        onOpen={handleNavDrawerOpen}
        mobileOpen={mobileOpen}
      />*/}
      <StyledAppContainer />
      </RootDiv>
    </>
  );
};

export default AppFrame;
