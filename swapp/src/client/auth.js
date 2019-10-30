import { setContext } from 'apollo-link-context';

const authLink = setContext((_, { headers }) => {
  const user = JSON.parse(localStorage.getItem('user')) || {};

  return {
    headers: {
      ...headers,
      authorization: user.token ? user.token : ''
    }
  };
});

export default authLink;
