import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { StyledEngineProvider } from '@mui/material/styles';

import store from 'store';

import App from './App';
import './common/i18n/i18n';

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <Provider store={store}>
      <App />
    </Provider>
  </StyledEngineProvider>,
  document.getElementById('root'),
);

// dispatch would do twice when in strict mode

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// )
