import client from "@/apollo-client";
import SearchComponent from "@/components/SearchComponent";
import { GET_ALL_POKEMON } from "@/graphql/queries";

export default async function ShowPokemon() {
  const { data } = await client.query({
    query: GET_ALL_POKEMON,
    variables: { first: 151 },
  });

  return (
    <div>
      <SearchComponent pokemons={data.pokemons} />
    </div>
  );
}
