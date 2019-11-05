import gql from 'graphql-tag.macro';

export const EPISODE_FRAGMENT = gql`
    fragment EpisodeFragment on Episode {
        id
        title
        episodeId
        openingCrawl
        image
        director
        releaseDate
    }
`;