// top module
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

// UI components
import {
  Toolbar,
  Tooltip,
  Stack,
  Menu,
  MenuItem,
  Typography,
  AppBar as MuiAppBar,
  Box,
} from '@mui/material';
import { Theme, styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';

const NavIconButton = styled(IconButton, {
  shouldForwardProp: (prop: any) => prop !== 'disableNavDrawer',
})<{ disableNavDrawer: boolean }>(({ disableNavDrawer, theme }) => {
  if (disableNavDrawer) {
    return {};
  }
  return {
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
  };
});

const HomePageButton = () => {
  return (
    <>
      <Typography sx={{ flexGrow: 1, fontSize: 'h6.fontSize' }}>
        賽馬娘測試
      </Typography>
    </>
  );
};

const AppBar = (props: any) => {
  const { t, i18n } = useTranslation();

  const { disableNavDrawer = false, handleNavDrawerOpen } = props;

  return (
    <Box
      component={MuiAppBar}
      sx={{
        position: 'relative',
        zIndex: (theme: Theme) => theme.zIndex.drawer,
        // padding: '0 2px',
      }}
    >
      <Toolbar>
        <NavIconButton
          edge="start"
          color="inherit"
          aria-label={t('openDrawer')}
          disableNavDrawer={disableNavDrawer}
          onClick={handleNavDrawerOpen}
        >
          <MenuIcon />
        </NavIconButton>
        <HomePageButton />
      </Toolbar>
    </Box>
  );
};

export default AppBar;
