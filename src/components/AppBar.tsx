// top module
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { useChangeTheme } from '@common/preference/ThemeContext';

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
  Button,
  IconButton,
  Tabs,
  Tab,
} from '@mui/material';
import { Theme, styled, useTheme } from '@mui/material/styles';
import {
  Language as LanguageIcon,
  Menu as MenuIcon,
  Flare as FlareIcon,
  Brightness3 as Brightness3Icon,
} from '@mui/icons-material';

interface IProps {
  displayDrawer: boolean;
  setDisplayDrawer: (display: boolean) => void;
}

const NavIconButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    visibility: 'hidden',
  },
}));

const GrowingDiv = styled('div')({
  flex: '1 1 auto',
});

const AppBar = (props: IProps) => {
  const { displayDrawer, setDisplayDrawer } = props;

  const theme = useTheme();
  const changeTheme = useChangeTheme();
  const { t, i18n } = useTranslation();

  const [themeMode, setThemeMode] = React.useState<string>(theme.palette.mode);

  const HomePageButton = React.useMemo(
    () => (
      <Typography sx={{ flexGrow: 1, fontSize: 'h6.fontSize' }}>
        賽馬娘測試
      </Typography>
    ),
    [],
  );

  const handleChangeTheme = React.useCallback(() => {
    const newThemeMode = themeMode !== 'dark' ? 'dark' : 'light';
    setThemeMode(newThemeMode);
    changeTheme({
      paletteMode: newThemeMode,
    });
  }, [themeMode]);

  const TodoTab = React.useCallback(
    (label, href) => (
      <Tab
        component="a"
        label={label}
        href={href}
        sx={{ pointerEvents: 'none' }}
      />
    ),
    [],
  );

  const NormalTab = React.useCallback(
    (label, href) => <Tab component="a" label={label} href={href} />,
    [],
  );

  return (
    <Box
      component={MuiAppBar}
      sx={{
        position: 'absolute',
        zIndex: theme.zIndex.drawer + 1,
        // padding: '0 2px',
      }}
    >
      <Toolbar>
        <NavIconButton
          edge="start"
          color="inherit"
          aria-label={t('openDrawer')}
          onClick={() => setDisplayDrawer(!displayDrawer)}
        >
          <MenuIcon />
        </NavIconButton>
        {HomePageButton}
        <Tabs value={false} aria-label="nav tabs example">
          {TodoTab(t('馬娘設定'), '/umaSettings')}
          {NormalTab(t('賽道檢視'), '/raceDetails')}
          {TodoTab(t('耗耐模擬'), '/staminaCalculator')}
        </Tabs>
        <Stack direction="row" spacing={2} sx={{ '& > button': { width: 42 } }}>
          <Tooltip title={t('ThemeModeSwitch') as string} enterDelay={300}>
            <IconButton
              color="inherit"
              onClick={handleChangeTheme}
              sx={{ px: '10px' }}
            >
              {themeMode === 'dark' ? (
                <Brightness3Icon fontSize="small" />
              ) : (
                <FlareIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </Stack>
      </Toolbar>
    </Box>
  );
};

export default AppBar;
