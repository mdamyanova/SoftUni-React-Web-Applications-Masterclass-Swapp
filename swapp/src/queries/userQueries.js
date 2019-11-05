import gql from 'graphql-tag.macro';

export const LOG_IN_MUTATION = gql`
mutation SignIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password) {
    token
  }
}
`;

export const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;
