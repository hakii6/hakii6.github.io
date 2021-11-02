// top module
import * as React from 'react';

// UI components
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(({ theme }) => {
  return {
    paddingTop: 80,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
    },
  };
});

const AppContainer = (props: any) => {
  return (
    <StyledContainer
      id="main-content"
      maxWidth={false}
      tabIndex={-1}
      {...props}
    />
  );
};

export default AppContainer;
