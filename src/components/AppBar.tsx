// top module
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

// UI components
import { Toolbar,Tooltip, Stack, Menu, MenuItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';

// import {
//   Brightness3 as Brightness3Icon,
//   Flare as FlareIcon,
//   Edit as EditIcon,
//   DirectionsRun as DirectionsRunIcon,
// } from '@mui/icons-material';

// child components
// import UmaSettings from 'features/umaSettings';
//   return (
//     <Fab
//       sx={{
//         ml: 2,
//       }}
//       aria-label="Theme mode switch"
//       onClick={() => setDarkMode(!darkMode)}
//     >
//       {darkMode ? <Brightness3Icon /> : <FlareIcon />}
//     </Fab>
//   );
// };
// redux store
// import * as Actions from '../racesSlice';
import { RootState } from 'store';

//other

// interface Props {

// }

const GrowingDiv = styled('div')({
  flex: '1 1 auto',
});

const NavIconButton = styled(IconButton, {
  shouldForwardProp: (prop: any) => prop !== 'disablePermanent',
})(({ disablePermanent, theme }) => {
  if (disablePermanent) {
    return {};
  }
  return {
    [theme.breakpoints.up('lg')]: {
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

  // common hooks
  const { t, i18n } = useTranslation();
  const { disablePermanent = false, handleNavDrawerOpen } = props;

  return (
    <>
      <Toolbar>
        <NavIconButton
          edge="start"
          color="inherit"
          aria-label={t('openDrawer')}
          disablePermanent={disablePermanent}
          onClick={handleNavDrawerOpen}
        >
          <MenuIcon />
        </NavIconButton>
        <HomePageButton />

        <GrowingDiv />
      </Toolbar>
    </>
  );
};

export default AppBar;

/* <Tooltip title={t('appFrame.changeLanguage')} enterDelay={300}>
<IconButton
  {...languageButtonProps}
  sx={{
    px: '10px',
  }}
>
  <LanguageIcon fontSize="small" />
</IconButton>
</Tooltip>*/


// const languageButtonProps = {
//   color: 'inherit',
//   onClick: handleLanguageIconClick,
//   'aria-owns': languageMenu ? 'language-menu' : undefined,
//   'aria-haspopup': 'true',
//   'data-ga-event-category': 'header',
//   'data-ga-event-action': 'language',
// };

// const LanguageSetting = () => {
//   const { t, i18n } = useTranslation();
//   const [locale, setLocale] = useState(String(i18n.language));

//   const handleChange = (e: SelectChangeEvent) => {
//     if (typeof e.target.value === 'string') {
//       i18n.changeLanguage(e.target.value);
//       setLocale(e.target.value);
//     }
//   };

//   useEffect(() => {
//     localStorage.setItem('i18nextLng', String(locale));
//   }, [locale]);

//   return (
//     <FormControl>
//       <Select name="locale" value={locale} onChange={handleChange} displayEmpty>
//         <MenuItem value="zh-TW">中文</MenuItem>
//         <MenuItem value="ja">日文</MenuItem>
//       </Select>
//     </FormControl>
//   );
// };
