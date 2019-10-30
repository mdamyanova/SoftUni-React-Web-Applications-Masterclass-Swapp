import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { urlConstant } from '../constants/urlConstant';
import authLink from './auth';
import { typeDefs } from './local';

const httpLink = createHttpLink({
  uri: urlConstant.GRAPHQL_SERVER
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  typeDefs
});

const getToken = () => {
  const user = JSON.parse(localStorage.getItem('user')) || {};
  if (user.token) {
    return true;
  }

  return false;
};

cache.writeData({
  data: {
    authenticated: getToken()
  }
});

export default client;
