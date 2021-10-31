import * as React from 'react';
import { CssBaseline, Box } from '@mui/material';
import { styled, Theme } from '@mui/material/styles';

// child components
import AppBar from './AppBar';
import AppNavDrawer from './AppNavDrawer';
import AppContainer from './AppContainer';
import AppMainContent from './AppMainContent';

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: prop => prop !== 'disableNavDrawer',
})(({ disableNavDrawer, theme }) => {
  return {
    padding: '0 2px',
    transition: theme.transitions.create('width'),
  };
});

// const StyledAppNavDrawer = styled(AppNavDrawer)(({ disableNavDrawer, theme }) => {
//   if (disableNavDrawer) {
//     return {};
//   }
//   return {
//     [theme.breakpoints.up('lg')]: {
//       display: 'flex',
//       flexDirection: 'column',
//       // position: 'relative',
//       // flexShrink: 0,
//       // width: 240,
//     },
//   };
// });

const AppLayout = (props: any) => {
  const { children, disableNavDrawer = false, disableLinkTable = false } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleNavDrawerOpen = () => {
    setMobileOpen(true);
  };
  const handleNavDrawerClose = React.useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <StyledAppBar disableNavDrawer={disableNavDrawer} />
      qwjieuoiqwehuoiqwe
      <div>
        <AppNavDrawer
          disableNavDrawer={disableNavDrawer}
          onClose={handleNavDrawerClose}
          onOpen={handleNavDrawerOpen}
          mobileOpen={mobileOpen}
        />
        {children}
      </div>
    </Box>
  );
}

export default AppLayout;
