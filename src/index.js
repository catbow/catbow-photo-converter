import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import Router from './Router';
import variables from './styles/variable';
import { FileProvider } from './context/fileContext';
import { ModalProvider } from './components/common/modal/contexts/modalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FileProvider>
    <ModalProvider>
      <ThemeProvider theme={{ style: theme, variables }}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </ModalProvider>
  </FileProvider>
);
