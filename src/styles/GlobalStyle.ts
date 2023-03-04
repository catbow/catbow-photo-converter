import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    background:${({ theme }) => theme.colors.mainColor};
  }
  main{
    width: 100%;
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
