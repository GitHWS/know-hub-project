import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from './theme';

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
    overflow: hidden;
    background-color: ${theme.colors.black};
    font-family: 'Pretendard'
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
    font-family: 'pretendard', sans-serif;
    resize: none;
  }

  button{
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
