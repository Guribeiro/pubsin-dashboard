import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark';
import { GlobalSyle } from './styles/global';
import Routes from './routes';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={dark}>
      <Router>
        <Routes />
        <GlobalSyle />
      </Router>
    </ThemeProvider>
  );
};
export default App;
