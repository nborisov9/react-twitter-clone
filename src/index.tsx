import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from './theme';
import { store } from './store/store';

import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </ThemeProvider>,

  document.getElementById('root'),
);
