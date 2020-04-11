import {ApolloProvider} from '@apollo/react-hooks';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import client from './apollo';
import {Home} from './routes';
import {global as GlobalStyle, theme} from './styles';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Router>
        <GlobalStyle />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
