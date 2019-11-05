import gql from 'graphql-tag.macro';
import { PERSON_FRAGMENT } from './fragments/characterFraments';
import { STARSHIPS_CONNECTION_FRAGMENT } from './fragments/starshipFraments';

export const ALL_PEOPLE_QUERY = gql`
  query AllPeopleQuery($first: Int!, $after: String, $filter: PersonFilter) {
    allPeople(first: $first, after: $after, filter: $filter) {
      edges {
        node {
          ...PersonFragment
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
      totalCount
    }
  }
  ${PERSON_FRAGMENT}
`;

export const PERSON_QUERY = gql`
    query PersonQuery($id: ID!, $first: Int, $after: String) {
        person(id: $id) {
            ...PersonFragment
            starships(first: $first, after: $after) {
                ...StarshipsConnectionFragment
            }
        }
    }
    ${PERSON_FRAGMENT}
    ${STARSHIPS_CONNECTION_FRAGMENT}
`;
