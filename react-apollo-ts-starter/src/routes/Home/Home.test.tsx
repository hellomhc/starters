import {ApolloProvider} from '@apollo/react-hooks';
import {render} from '@testing-library/react';
import React from 'react';
import client from '../../apollo';
import Home from './Home';

test('renders without error', () => {
  render(
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>,
  );
});
