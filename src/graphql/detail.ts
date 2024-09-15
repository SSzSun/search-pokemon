import { gql } from "@apollo/client";

export const GET_DETAIL_POKEMON = gql`
  query getPokemonByName($name: String!) {
    pokemon(name: $name) {
      id
      name
      number
      classification
      types
      resistant
      weaknesses
      maxHP
      image
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      evolutions {
        name
        types
        image
      }
    }
  }
`;
