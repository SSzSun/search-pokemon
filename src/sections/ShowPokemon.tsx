import client from "@/apollo-client";
import SearchComponent from "@/components/SearchComponent";
import { GET_ALL_POKEMON } from "@/graphql/queries";

export default async function HomeMain() {
  const { data } = await client.query({
    query: GET_ALL_POKEMON,
    variables: { first: 151 },
  });
  //Call the SearchComponent component
  return (
    <div>
      <SearchComponent pokemons={data.pokemons} />
    </div>
  );
}
