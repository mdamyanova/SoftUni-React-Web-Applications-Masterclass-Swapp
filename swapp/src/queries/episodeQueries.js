import gql from 'graphql-tag.macro';

export const ALL_EPISODES = gql`
query {
    allEpisodes(first: 20) {
      edges {
        node {
          id
          title
          episodeId
          openingCrawl
          image
        }
      }
    }
  }
`;
