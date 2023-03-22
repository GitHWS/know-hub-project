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
    // 기본 폰트 사이즈 10px로 고정
    font-size: 62.5%;
  }

  body{
    height:100vh;
    overflow: hidden;
    background-color: ${theme.colors.common.black};
  }

  ul, ol{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  input, textarea{
    outline: none;
  }

  input{
    background-color: none;
    border: none;
  }

  textarea{
    font-family: Arial, sans-serif;
    resize: none;
  }

  button{
    background: none;
    border: none;
    cursor: pointer;
  }

  /* 커스텀 CSS */
  h1, h2, h3, h4, h5, h6{
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.font.white}
  }
`;

export default GlobalStyle;
