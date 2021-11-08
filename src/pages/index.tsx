import * as React from 'react';
import { Paper } from '@mui/material';
import { styled, Theme } from '@mui/material/styles';

import AppLayout from '@components/AppLayout';

const StyledPaper = styled(Paper)(({ theme }) => ({
  outline: 0,
  backgroundColor:
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[900],
  // flexBasis: 'auto',
  // flexGrow: 1,
  padding: 20,
  height: 'calc(100vh - 100px)',
  overflow: 'auto',
  // width: '100%',
  // maxWidth: '100vw',
}));

const Home = () => (
  <AppLayout>
    <StyledPaper elevation={3}>homeeeee</StyledPaper>
  </AppLayout>
);

export default Home;
