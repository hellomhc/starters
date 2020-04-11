import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {Home} from './routes';
import {global as GlobalStyle, theme} from './styles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
