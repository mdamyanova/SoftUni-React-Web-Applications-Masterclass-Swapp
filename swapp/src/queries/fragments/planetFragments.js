import gql from 'graphql-tag.macro';

export const PLANET_FRAGMENT = gql`
    fragment PlanetFragment on Planet {
        id
        name
        diameter
        population
    }
`;

export const SPECIES_FRAGMENT = gql`
    fragment SpeciesFragment on Species {
        id
        name
        classification
        averageHeight
        averageLifespan
    }
`;
