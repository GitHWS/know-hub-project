import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset};

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    height:100vh;
    background-color: ${theme.colors.black};
  }

  ul, ol{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  button{
    background-color: none;
    border: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
