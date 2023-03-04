import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';

import { ContextWrapper } from './components/contexts/ContextWrapper';
import Catbow from './Catbow';

import GlobalStyle from './styles/GlobalStyle';
import variables from './styles/variable';
import colors from './styles/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ContextWrapper>
    <ThemeProvider theme={{ colors, variables }}>
      <GlobalStyle />
      <Catbow />
    </ThemeProvider>
  </ContextWrapper>
);
