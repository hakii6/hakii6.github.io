// top module
import * as React from 'react';

// UI components
import { Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const NAV_DRAWER_WIDTH = 240;

const StyledMain = styled('main')(({ theme }) => ({
  display: 'flex',
  width: '100vw',
  height: '100vh',
  // [theme.breakpoints.up('lg')]: {
  //   width: `calc(100% - ${NAV_DRAWER_WIDTH}px)`,
  // },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  paddingTop: 80,
  maxWidth: 'md',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
  },
}));

const AppMain = ({ children }: { children: React.ReactNode }) => (
  <StyledMain>
    <StyledContainer>{children}</StyledContainer>
  </StyledMain>
);

export default AppMain;
// maxWidth={false} tabIndex={-1}
