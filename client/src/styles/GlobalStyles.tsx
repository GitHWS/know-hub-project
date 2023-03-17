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
    min-height:100vh;
    display: grid;
    place-items: center;
    background-color: ${theme.colors.black};
  }

  ul, ol{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  input{
    background-color: none;
    border: none;
  }

  button{
    background: none;
    border: none;
    cursor: pointer;
  }

  /* 커스텀 CSS */

  h1, h2, h3{
    font-weight: 900;
    color: ${theme.colors.white}
  }

  h1{
    font-size: 3rem;
  }

  h2{
    font-size: 2.8rem;
  }
`;

export default GlobalStyle;
