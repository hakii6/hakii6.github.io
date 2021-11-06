import * as React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@mui/material/Button';
import { styled, alpha, Theme } from '@mui/material/styles';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
// import AppNavDrawerItem from 'docs/src/modules/components/AppNavDrawerItem';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

const NAV_DRAWER_WIDTH = 240;

export default function AppNavDrawer(props: any) {
  const { t, i18n } = useTranslation();
  return (
    <Box
      component={Drawer}
      variant="permanent"
      sx={{
        '& .MuiDrawer-paper': {
          position: 'relative',
          whiteSpace: 'nowrap',
          width: (theme: Theme) => theme.spacing(7),
          transition: (theme: Theme) =>
            theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          boxSizing: 'border-box',
          overflowX: 'hidden',
        },
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        drawer
      </Toolbar>
    </Box>
  );
}

// {disableNavDrawer ? (
//   <SwipeableDrawer
//     disableBackdropTransition={!iOS}
//     variant="temporary"
//     open={mobileOpen}
//     onOpen={onOpen}
//     onClose={onClose}
//     ModalProps={{
//       keepMounted: true,
//     }}
//     PaperProps={{
//       className: 'algolia-drawer',
//       component: SwipeableDrawerPaperComponent,
//       sx: {
//         background: (theme) =>
//           theme.palette.mode === 'dark' ? theme.palette.grey[900] : '#FFF',
//       },
//     }}
//   >
//   </SwipeableDrawer>
// ) : null}
