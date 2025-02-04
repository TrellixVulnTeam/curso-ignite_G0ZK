import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './Router';

import { defaultTheme } from './Styles/themes/default';
import { GlobalStyle } from './Styles/themes/global';


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <Router />
      </BrowserRouter>      
      <GlobalStyle />
    </ThemeProvider>
  )
}
