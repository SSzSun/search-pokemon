import Image from "next/image";
import PokemonModal from "./PokemonModal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ListElement } from "./ListElement";

type PokemonListProps = {
  pokemons: Array<{
    id: string;
    number: string;
    name: string;
    image: string;
    types: string[];
  }>;
};

export default function PokemonList({ pokemons }: PokemonListProps) {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const router = useRouter();
  const handleClick = (pokemon: any) => {
    router.push(`/pokemon/${pokemon.name}`); //Navigate to the detail page of the selected Pokémon
    setSelectedPokemon(pokemon);
  };

  const handleClose = () => {
    setSelectedPokemon(null);
  };

  const imageSize = 100; //Size of the Pokémon image

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-5 justify-center">
        {pokemons.map((pokemon) => (
          <div
            key={pokemon.id}
            className="bg-white border rounded-lg p-5 hover:shadow-red-500 hover:shadow-[0_0_20px] cursor-pointer"
            onClick={() => handleClick(pokemon)}
          >
            <div className="flex justify-center mb-3">
              <div style={{ width: imageSize, height: imageSize }} className="relative">
                <Image
                  src={pokemon.image}
                  alt={pokemon.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <h3 className="text-lg font-bold text-center">{pokemon.name}</h3>
            <p className="text-center text-gray-500">#{pokemon.number}</p>
            <div className="flex justify-center">
              <ListElement typePokemon={pokemon.types} />
            </div>
          </div>
        ))}
      </div>
      {/* Display the Pokémon modal when a Pokémon is selected */}
      {selectedPokemon && (
        <PokemonModal pokemon={selectedPokemon} onDismiss={handleClose}>
          {" "}
        </PokemonModal>
      )}
    </div>
  );
}
