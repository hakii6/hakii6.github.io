import * as React from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { grey } from '@mui/material/colors';

interface ThemeState {
  paletteMode: 'dark' | 'light';
}
interface ThemeAction {
  type: string;
  payload: ThemeState;
}
interface Props {
  children: React.ReactNode;
}

export const DispatchContext =
  React.createContext<React.Dispatch<ThemeAction> | null>(null);

export function ThemeProvider(props: Props) {
  const { children } = props;
  const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)');
  const preferredMode = prefersLightMode ? 'light' : 'dark';
  const [themeOptions, dispatch] = React.useReducer(
    (state: ThemeState, action: ThemeAction) => {
      switch (action.type) {
        case 'CHANGE_THEME_MODE':
          return {
            ...state,
            paletteMode: action.payload.paletteMode || state.paletteMode,
          };
        default:
          throw new Error(`Unrecognized type ${action.type}`);
      }
    },
    {
      paletteMode: preferredMode,
    },
  );
  const { paletteMode } = themeOptions;

  const theme = React.useMemo(() => {
    const newTheme = createTheme({
      typography: {
        fontSize: 18,
      },
      palette: {
        mode: paletteMode,
      },
      ...(paletteMode === 'dark' && {
        text: {
          primary: '#fff',
          secondary: grey[500],
        },
      }),
      ...(paletteMode === 'light' && {
        text: {
          primary: grey[900],
          secondary: grey[700],
        },
      }),
    });
    return newTheme;
  }, [paletteMode]);

  return (
    <MuiThemeProvider theme={theme}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </MuiThemeProvider>
  );
}

export function useChangeTheme() {
  const dispatch: any = React.useContext(DispatchContext);
  return React.useCallback(
    options =>
      dispatch({
        type: 'CHANGE_THEME_MODE',
        payload: options,
      }),
    [dispatch],
  );
}
