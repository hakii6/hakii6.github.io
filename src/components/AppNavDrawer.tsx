import * as React from 'react';
import { useTranslation } from 'react-i18next';

import NextLink from 'next/link';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { styled, alpha } from '@mui/material/styles';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
// import AppNavDrawerItem from 'docs/src/modules/components/AppNavDrawerItem';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import DoneRounded from '@mui/icons-material/DoneRounded';

const savedScrollTop = {};

const useEnhancedEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

const ToolbarIE11 = styled('div')({ display: 'flex' });

const ToolbarDiv = styled('div')(({ theme }) => {
  return {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing(3),
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
});

const StyledDrawer = styled(Drawer)(({ theme }) => {
  return {
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  };
});

const SwipeableDrawerPaperComponent = styled('div')({
  // width: 250,
  boxShadow: 'none',
});

// iOS is hosted on high-end devices. We can enable the backdrop transition without
// dropping frames. The performance will be good enough.
// So: <SwipeableDrawer disableBackdropTransition={false} />
const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

export default function AppNavDrawer(props: any) {
  const { disableNavDrawer, mobileOpen, onClose, onOpen } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const mobile = useMediaQuery((theme: any) => theme.breakpoints.down('lg'));
  const { t, i18n } = useTranslation();

  const drawer = React.useMemo(() => {

    return (
      <React.Fragment>
      <ToolbarIE11>
      <ToolbarDiv>
        <Divider />
        <Divider />
{/*        <Box sx={{ height: 40 }} />
*/}
</ToolbarDiv>
</ToolbarIE11>
</React.Fragment>
    );
  }, [onClose, anchorEl, setAnchorEl]);

  return (
    <nav aria-label={t('mainNavigation')}>
      {disableNavDrawer || mobile ? (
        <SwipeableDrawer
          disableBackdropTransition={!iOS}
          variant="temporary"
          open={mobileOpen}
          onOpen={onOpen}
          onClose={onClose}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            className: 'algolia-drawer',
            component: SwipeableDrawerPaperComponent,
            sx: {
              background: (theme) =>
                theme.palette.mode === 'dark' ? theme.palette.grey[900] : '#FFF',
            },
          }}
        >
{/*          <PersistScroll slot="swipeable" enabled={mobileOpen}>
            {drawer}
          </PersistScroll>*/}
        </SwipeableDrawer>
      ) : null}
      {disableNavDrawer || mobile ? null : (
        <StyledDrawer
          variant="permanent"
          PaperProps={{
            component: SwipeableDrawerPaperComponent,
            sx: {
              background: (theme) =>
                theme.palette.mode === 'dark' ? theme.palette.grey[900] : '#fff',
            },
          }}
          open
        >
            {drawer}
            hiuhihuihiuu
        </StyledDrawer>
      )}
    </nav>
  );
}
// <ToolbarDiv>
//   <NextLink href="/" passHref onClick={onClose}>
//     <Box component="a" aria-label={t('goToHome')} sx={{ lineHeight: 0, mr: 2 }}>
//       <SvgMuiLogo width={32} />
//     </Box>
//   </NextLink>
//   {process.env.LIB_VERSION ? (
//     <React.Fragment>
//       <Button
//         onClick={(event) => {
//           setAnchorEl(event.currentTarget);
//         }}
//         size="small"
//         variant="outlined"
//         endIcon={<ArrowDropDownRoundedIcon fontSize="small" />}
//         sx={{
//           border: (theme) =>
//             `1px solid  ${
//               theme.palette.mode === 'dark'
//                 ? theme.palette.primaryDark[600]
//                 : theme.palette.grey[200]
//             }`,
//           color: (theme) =>
//             theme.palette.mode === 'dark'
//               ? theme.palette.primary[300]
//               : theme.palette.primary[500],
//           mr: 2,
//         }}
//       >
//         {/* eslint-disable-next-line material-ui/no-hardcoded-labels -- version string is untranslatable */}
//         {`v${process.env.LIB_VERSION}`}
//       </Button>
//       <Menu
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={() => setAnchorEl(null)}
//         PaperProps={{
//           variant: 'outlined',
//           sx: {
//             mt: 0.5,
//             minWidth: 160,
//             borderColor: (theme) =>
//               theme.palette.mode === 'dark' ? 'primaryDark.700' : 'grey.200',
//             bgcolor: (theme) =>
//               theme.palette.mode === 'dark' ? 'primaryDark.900' : 'background.paper',
//             boxShadow: (theme) =>
//               `0px 4px 20px ${
//                 theme.palette.mode === 'dark'
//                   ? alpha(theme.palette.background.paper, 0.72)
//                   : 'rgba(170, 180, 190, 0.3)'
//               }`,
//             '& .MuiMenuItem-root': {
//               fontSize: (theme) => theme.typography.pxToRem(14),
//               fontWeight: 500,
//               '&.Mui-selected': {
//                 color: 'primary.main',
//               },
//             },
//           },
//         }}
//       >
//         <MenuItem selected onClick={() => setAnchorEl(null)}>
//           {/* eslint-disable-next-line material-ui/no-hardcoded-labels -- version string is untranslatable */}
//           {`v${process.env.LIB_VERSION}`} <DoneRounded sx={{ fontSize: 16, ml: 0.25 }} />
//         </MenuItem>
//         <MenuItem
//           component="a"
//           href={`https://v4.mui.com${languagePrefix}/`}
//           onClick={onClose}
//         >
//           {/* eslint-disable-next-line material-ui/no-hardcoded-labels -- version string is untranslatable */}
//           {`v4`}
//         </MenuItem>
//         <Divider />
//         <MenuItem
//           component="a"
//           href={`https://mui.com${languagePrefix}/versions/`}
//           onClick={onClose}
//         >
//           {/* eslint-disable-next-line material-ui/no-hardcoded-labels -- version string is untranslatable */}
//           {`View all versions`}
//         </MenuItem>
//       </Menu>
//     </React.Fragment>
//   ) : null}
// </ToolbarDiv>
