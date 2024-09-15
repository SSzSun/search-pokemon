"use client";
import client from "@/apollo-client";
import Image from "next/image";
import PokemonModal from "@/components/PokemonModal";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { GET_DETAIL_POKEMON } from "@/graphql/detail";
import { useEffect, useState } from "react";
import { ListElement } from "@/components/ListElement";

export default function PokemonDetailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { name } = useParams();
  const [pokemon, setPokemon]: any = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const queryName = searchParams.get("evolution") || name;
    if (queryName) {
      client
        .query({
          query: GET_DETAIL_POKEMON,
          variables: { name: queryName },
        })
        .then(({ data }) => {
          setPokemon(data.pokemon);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [name, searchParams]);

  // The useEffect hook will run every time the name or searchParams change.
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-">
        <button type="button" className="bg-blue-500 rounded-xl p-4" disabled>
          Loading Pokémon data...
        </button>
      </div>
    );
  }

  if (!pokemon) {
    return (
      <div className="flex flex-col items-center font-semibold justify-center h-screen">
        <span className="text-2xl font-bold text-red-600">Pokémon not found!!</span>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => router.push("/")}
        >
          Go back
        </button>
      </div>
    );
  }

  const handleEvolutionClick = (evolutionName: string) => {
    router.push(`/pokemon/${name}?evolution=${evolutionName}`); // Add query parameter to the URL
  };

  const handleClickOutside = () => {
    router.push("/");
  };

  const imageSize = 130; // Size of the Pokémon image
  const imageSizeEvo = 80; // Size of the evolution image

  return (
    <PokemonModal onDismiss={handleClickOutside}>
      <div className="container mx-auto my-10 px-4 rounded-xl bg-white">
        <div className="max-w-full mx-auto py-5">
          <div className="flex flex-col items-center text-center text-3xl font-bold my-4 p-2">
            <div className="flex flex-col md:flex-row items-center">
              <span className="text-xl">{pokemon.name}</span>
              <span className="text-gray-900/40 ml-2 text-lg">#{pokemon.number}</span>
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <div style={{ width: imageSize, height: imageSize }} className="relative">
              <Image
                alt={pokemon.name}
                src={pokemon.image}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          <h1 className="text-lg md:text-2xl font-bold text-center mb-2 ">
            Detail Pokemon
          </h1>
          {/* // Add the following code to display the details of the Pokémon */}
          <div className="bg-white p-2 md:p-4 rounded-lg shadow-md border">
            <div className="inset-0 max-h-[9rem] md:max-h-52 lg:max-h-80 z-0 overflow-auto">
              <div className="flex flex-wrap justify-between space-x-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold">Height</h3>
                  <div className="text-sm md:text-lg">
                    {pokemon.height.minimum} - {pokemon.height.maximum}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold">Weight</h3>
                  <div className="text-sm md:text-lg">
                    {pokemon.weight.minimum} - {pokemon.weight.maximum}
                  </div>
                </div>
                <div className="flex-2 md:flex-1">
                  <h3 className="text-base md:text-lg font-semibold">Max HP</h3>
                  <div className="text-sm md:text-lg">{pokemon.maxHP}</div>
                </div>
              </div>
              <hr className="mb-4" />
              {/* End */}
              {/* // Add the following code to display the classification, types, resistant,
              and weaknesses of the Pokémon */}
              <div className="space-y-4">
                <div className="flex space-x-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">Category</h3>
                    <div>{pokemon.classification}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">Types</h3>
                    <ListElement typePokemon={pokemon.types} />
                  </div>
                </div>
                <div className="flex space-x-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">Resistant</h3>
                    <ListElement typePokemon={pokemon.resistant} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">Weaknesses</h3>
                    <ListElement typePokemon={pokemon.weaknesses} />
                  </div>
                </div>
                {/* End */}
                {/* // Add the following code to display the attacks of the Pokémon */}
                <hr className="mb-4" />
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Attacks</h3>
                  <div>
                    <h4 className="font-semibold">Fast Attacks</h4>
                    <div className="space-y-1">
                      {pokemon.attacks.fast.map((attack: any) => (
                        <div key={attack.name} className="flex">
                          <span className="flex-1">{attack.name}</span>
                          <span className="flex-1 text-gray-500">{attack.type}</span>
                          <span className="flex-1 text-gray-500">{attack.damage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Special Attacks</h4>
                    <div className="space-y-1">
                      {pokemon.attacks.special.map((attack: any) => (
                        <div key={attack.name} className="flex">
                          <span className="flex-1">{attack.name}</span>
                          <span className="flex-1 text-gray-500">{attack.type}</span>
                          <span className="flex-1 text-gray-500">{attack.damage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* End */}
              </div>
            </div>
          </div>
          {/* // Add the following code to display the evolutions of the Pokémon */}
          <h3 className="font-bold text-lg mt-6 mb-4">Evolutions:</h3>
          {pokemon.evolutions?.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {pokemon.evolutions.map((evolution: any) => (
                <div
                  key={evolution.id}
                  className="flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105"
                  onClick={() => handleEvolutionClick(evolution.name)}
                >
                  <div
                    style={{ width: imageSizeEvo, height: imageSizeEvo }}
                    className="relative"
                  >
                    <Image
                      alt={evolution.name}
                      src={evolution.image}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <p className="text-center text-blue-600 mt-2 text-sm">
                    {evolution.name}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            // If there are no evolutions, display a message
            <p className="text-center text-gray-500 mt-4">
              No evolutions available for this Pokémon.
              <br />
              (ไม่มีการเปลี่ยนร่างสำหรับโปเกมอนนี้)
            </p>
          )}
        </div>
        {/* End */}
      </div>
    </PokemonModal>
  );
}
