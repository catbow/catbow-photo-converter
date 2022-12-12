import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    height: 100vh;
    overflow-y: hidden; 
  }
  main {
    background:${theme.mainColor};
  }
  * {
    box-sizing: border-box;
  }
  a {
  color: inherit;
  text-decoration: none; 
  }
  li {
  list-style: none;
  }
  button{
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;

export default GlobalStyle;
