import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyles';
import theme from './styles/theme';
import './assets/fonts/fonts.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
