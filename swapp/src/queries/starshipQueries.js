import gql from 'graphql-tag.macro';
import { STARSHIP_FRAGMENT } from './fragments/starshipFraments';

export const STARSHIP_QUERY = gql`
    query StarshipQuery($id: ID!) {
        starship(id: $id) {
            ...StarshipFragment
        }
    }
    ${STARSHIP_FRAGMENT}
`;