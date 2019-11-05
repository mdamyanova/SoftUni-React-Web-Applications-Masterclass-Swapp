import gql from 'graphql-tag.macro';
import {
  EPISODE_FRAGMENT,
  PEOPLE_CONNECTION_FRAGMENT,
} from './fragments';

export const ALL_EPISODES_QUERY = gql`
  query AllEpisodesQuery($first: Int!, $after: String, $filter: EpisodeFilter) {
    allEpisodes(first: $first, after: $after, filter: $filter) {
      edges {
        node {
          ...EpisodeFragment
        }
        cursor
      }
      pageInfo {
        hasNextPage
      }
      totalCount
    }
  }
  ${EPISODE_FRAGMENT}
`;

export const EPISODE_QUERY = gql`
  query EpisodQuery($id: ID!, $first: Int, $after: String) {
    episode(id: $id) {
      ...EpisodeFragment
      people(first: $first, after: $after) {
        ...PeopleConnectionFragment
      }
    }
  }
  ${EPISODE_FRAGMENT}
  ${PEOPLE_CONNECTION_FRAGMENT}
`;
