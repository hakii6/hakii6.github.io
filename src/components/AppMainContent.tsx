import * as React from 'react';
import { styled, Theme } from '@mui/material/styles';
import { Paper } from '@mui/material';

const AppMainContent = (props: any) => {
  const { children } = props;

  return <Paper elevation={3}>{children}</Paper>;
};

export default AppMainContent;
