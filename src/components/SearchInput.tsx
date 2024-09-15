"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import PokeballIcon from "@/assets/images/pokeball-icon.png";

export default function SearchInput({ onSearch }: { onSearch: (name: string) => void }) {
  const [name, setName] = useState("");

  useEffect(() => {
    onSearch(name);
  }, [name, onSearch]);

  return (
    <div className="flex flex-col items-center">
      <div className="inline-flex gap-2 items-center">
        <span>
          <Image src={PokeballIcon} alt="pokeball" width={25} height={25} />
        </span>
        <h1 className="font-semibold text-center bg-gradient-to-r from-red-300 to-yellow-400 bg-clip-text text-transparent text-2xl my-4">
          Search Pokémon
        </h1>
        <span>
          <Image src={PokeballIcon} alt="pokeball" width={25} height={25} />
        </span>
      </div>

      <div className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Pokémon name"
          className="rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-red-600"
        />
      </div>
    </div>
  );
}
