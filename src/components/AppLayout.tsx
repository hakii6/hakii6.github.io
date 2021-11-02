import * as React from 'react';
import { CssBaseline, Box } from '@mui/material';
import { styled, Theme } from '@mui/material/styles';

// child components
import AppBar from './AppBar';
import AppNavDrawer from './AppNavDrawer';
import AppContainer from './AppContainer';
import AppMainContent from './AppMainContent';

const AppLayout = (props: any) => {
  const { children } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'column',
      }}
    >
      <CssBaseline />

      <AppBar />
      <AppNavDrawer />
      {/*        <Box
        component="main"
        sx={{
          backgroundColor: theme =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        {children}
      </Box>*/}
    </Box>
  );
};

export default AppLayout;
// <AppNavDrawer
//   disableNavDrawer={disableNavDrawer}
//   onClose={handleNavDrawerClose}
//   onOpen={handleNavDrawerOpen}
//   mobileOpen={mobileOpen}
// />
// {children}
