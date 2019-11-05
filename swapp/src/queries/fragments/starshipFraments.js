import gql from 'graphql-tag.macro';

export const STARSHIP_FRAGMENT = gql`
  fragment StarshipFragment on Starship {
    id
    name
    model
    image
    starshipClass
    cost
    maxAtmosphericSpeed
    maxMLPerHour
    hyperdriveRating
    crew
  }
`;

export const STARSHIPS_CONNECTION_FRAGMENT = gql`
  fragment StarshipsConnectionFragment on StarshipsConnection {
    edges {
      node {
        ...StarshipFragment
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
    totalCount
  }
  ${STARSHIP_FRAGMENT}
`;
