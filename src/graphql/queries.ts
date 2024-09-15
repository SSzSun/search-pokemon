import { gql } from '@apollo/client';

export const GET_ALL_POKEMON = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
    id
    number
    name
    types
    image
  }
}
`;
