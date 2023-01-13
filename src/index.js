import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { ContextWrapper } from './components/contexts/ContextWrapper';
import Catbow from './Catbow';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import variables from './styles/variable';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextWrapper>
    <ThemeProvider theme={{ style: theme, variables }}>
      <GlobalStyle />
      <Catbow />
    </ThemeProvider>
  </ContextWrapper>
);
