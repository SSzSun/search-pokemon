"use client";
import { useState } from "react";
import PokemonList from "@/components/PokemonList";
import SearchInput from "@/components/SearchInput";
import type { Pokemon } from "@/types";

export default function SearchComponent({ pokemons }: { pokemons: Pokemon[] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPokemons = pokemons.filter((pokemon) =>
    searchTerm
      ? pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true
  );

  return (
    <div>
      <SearchInput onSearch={setSearchTerm} />
      {filteredPokemons.length > 0 ? (
        <PokemonList pokemons={filteredPokemons} />
      ) : (
        <div className="text-center text-red-500 font-semibold mt-4">
          Pokémon not found
        </div>
      )}
    </div>
  );
}
