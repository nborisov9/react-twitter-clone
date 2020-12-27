import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from './theme';

import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <CssBaseline />
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root'),
);
