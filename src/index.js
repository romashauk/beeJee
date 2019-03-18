import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import store from './redux/store';
import { Provider } from 'react-redux';

const theme = createMuiTheme();

ReactDOM.render(
  <Router>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  </Router>,
  document.getElementById('root')
);
