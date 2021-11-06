import * as React from 'react';
import { CssBaseline, Box } from '@mui/material';
import { styled, Theme } from '@mui/material/styles';

// child components
import AppBar from './AppBar';
import AppNavDrawer from './AppNavDrawer';
import AppMain from './AppMain';

interface Props {
  children: React.ReactNode;
}

const AppLayout = (props: Props) => {
  const { children } = props;
  const [displayDrawer, setDisplayDrawer] = React.useState<boolean>(false);
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <CssBaseline />

      <AppBar
        displayDrawer={displayDrawer}
        setDisplayDrawer={setDisplayDrawer}
      />
      <AppNavDrawer />
      <AppMain>{children}</AppMain>
    </Box>
  );
};

export default AppLayout;
