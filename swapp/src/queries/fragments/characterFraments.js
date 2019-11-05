import gql from 'graphql-tag.macro';
import {PLANET_FRAGMENT, SPECIES_FRAGMENT} from './planetFragments';

export const PERSON_FRAGMENT = gql`
fragment PersonFragment on Person {
    id
    name
    birthYear
    height
    mass
    image
    homeworld {
        ...PlanetFragment
    }
    species {
        ...SpeciesFragment
    }
}
${PLANET_FRAGMENT}
${SPECIES_FRAGMENT}
`;

export const PEOPLE_CONNECTION_FRAGMENT = gql`
fragment PeopleConnectionFragment on PeopleConnection {
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
${PERSON_FRAGMENT}
`;