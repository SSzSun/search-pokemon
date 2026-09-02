import Image from "next/image";
import { useRouter } from "next/navigation";
import { ListElement } from "./ListElement";
import type { Pokemon } from "@/types";

const IMAGE_SIZE = 100;

export default function PokemonList({ pokemons }: { pokemons: Pokemon[] }) {
  const router = useRouter();

  const handleClick = (pokemon: Pokemon) => {
    router.push(`/pokemon/${pokemon.name}`);
  };

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
              <div
                style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
                className="relative"
              >
                <Image
                  src={pokemon.image}
                  alt={pokemon.name}
                  fill
                  className="object-contain"
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
    </div>
  );
}
