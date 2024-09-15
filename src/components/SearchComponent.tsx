"use client";
import { useState } from "react";
import PokemonList from "@/components/PokemonList";
import SearchInput from "@/components/SearchInput";

export default function SearchComponent({ pokemons }: { pokemons: any }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPokemons = pokemons.filter((pokemon: any) =>
    searchTerm ? pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) : true
  ); //Filter the pokemons array based on the search term

  return (
    <div>
      {/*Call the SearchInput component */}
      <SearchInput onSearch={setSearchTerm} />
      {filteredPokemons.length > 0 ? ( //Check if the filteredPokemons array has more than 0 elements
        <PokemonList pokemons={filteredPokemons} />
      ) : (
        <div className="text-center text-red-500 font-semibold mt-4">
          Pokémon not found
        </div>
      )}
    </div>
  );
}
