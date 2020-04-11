import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloClient} from 'apollo-client';
import {ApolloLink} from 'apollo-link';
import {setContext} from 'apollo-link-context';
import {onError} from 'apollo-link-error';
import {HttpLink} from 'apollo-link-http';

const authLink = setContext((_, {headers}) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// an instance of an Apollo Cache
const cache = new InMemoryCache();

// get GraphQL results over a network using HTTP fetch.
const httpLink = new HttpLink({
  uri: process.env.REACT_APP_SERVER_ENDPOINT,
});

// catch and handle server errors, network errors, and GraphQL errors
const errorLink = onError(({graphQLErrors, networkError}): void => {
  // errors from the GraphQL endpoint
  if (graphQLErrors)
    graphQLErrors.forEach(({message, locations, path}) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  // any error during the link execution or server response
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

// GraphQL queries and mutations call in order to read and write to the cache.
const resolvers = {};

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([authLink, errorLink, httpLink]),
  resolvers,
});

export default client;
