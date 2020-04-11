import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
};

export default App;
