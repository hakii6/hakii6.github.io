import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import Head from 'next/head';

import {
  StyledEngineProvider,
  createTheme,
  styled,
} from '@mui/material/styles';

import store from '@store';
import { ThemeProvider } from '@common/preference/ThemeContext';

import type { AppProps /* , AppContext */ } from 'next/app';

import '@common/i18n/i18n';

interface Props {
  children: React.ReactNode;
}

function AppWrapper({ children }: Props) {
  return (
    <>
      <Head>
        <title>賽馬娘測試</title>
      </Head>

      <StyledEngineProvider injectFirst>
        <StoreProvider store={store}>
          <ThemeProvider>{children}</ThemeProvider>
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
