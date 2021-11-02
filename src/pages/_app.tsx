import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import Head from 'next/head';

import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
  styled,
} from '@mui/material/styles';
import { grey } from '@mui/material/colors';

import store from '@store';

import type { AppProps /*, AppContext */ } from 'next/app';

import '@common/i18n/i18n';

let theme = createTheme({
  typography: {
    fontSize: 18,
  },
  palette: {
    mode: 'dark',
    text: {
      primary: '#fff',
      secondary: grey[500],
    },
  },
});

const lightTheme = createTheme(theme, {
  palette: {
    mode: 'light',
    text: {
      primary: grey[900],
      secondary: grey[700],
    },
  },
});

function AppWrapper({ children }: { children: JSX.Element }) {
  const [darkMode, setDarkMode] = React.useState<boolean>(true);

  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>

      <StyledEngineProvider injectFirst>
        <StoreProvider store={store}>
          <ThemeProvider theme={darkMode ? theme : lightTheme}>
            {children}
          </ThemeProvider>
        </StoreProvider>
      </StyledEngineProvider>
    </>
  );
}

export default function App({ Component }: AppProps) {
  return (
    <AppWrapper>
      <Component />
    </AppWrapper>
  );
}

// <Main>
//   <StyledAppContainer>
//     <ActionsDiv/>
//     <Component {...pageProps} />
//   </StyledAppContainer>
// </Main>
