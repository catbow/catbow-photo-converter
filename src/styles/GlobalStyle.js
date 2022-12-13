import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from './theme';
import variables from './variable';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    overflow-x: auto; 
    background:${theme.mainColor};
    height:100vh;
    width:100vw;
  }
  main {
    ${variables.flex('column', 'center', 'center')};
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
