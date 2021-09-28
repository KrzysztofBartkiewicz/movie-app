import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyle';
import Root from './root/Root';
import mainTheme from './theme/main';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Root />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
