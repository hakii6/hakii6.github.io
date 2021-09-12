import React from 'react';
import ReactDOM from 'react-dom';
// import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { Provider } from 'react-redux';

import store from './store';

import App from './App';
import './i18n';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
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
