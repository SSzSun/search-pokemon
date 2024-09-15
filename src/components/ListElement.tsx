const elementColor: { [key: string]: { bg: string; text: string } } = {
  fire: { bg: "bg-red-500", text: "text-white" },
  water: { bg: "bg-blue-500", text: "text-white" },
  grass: { bg: "bg-green-500", text: "text-white" },
  psychic: { bg: "bg-purple-500", text: "text-white" },
  normal: { bg: "bg-gray-500", text: "text-white" },
  bug: { bg: "bg-green-500", text: "text-white" },
  poison: { bg: "bg-purple-500", text: "text-white" },
  fighting: { bg: "bg-red-500", text: "text-white" },
  ghost: { bg: "bg-purple-500", text: "text-white" },
  ice: { bg: "bg-blue-500", text: "text-white" },
  steel: { bg: "bg-gray-500", text: "text-white" },
  flying: { bg: "bg-blue-500", text: "text-white" },
  dragon: { bg: "bg-blue-500", text: "text-white" },
  // Light background
  dark: { bg: "bg-gray-500", text: "text-white" },
  ground: { bg: "bg-yellow-500", text: "text-black" },
  fairy: { bg: "bg-pink-500", text: "text-black" },
  rock: { bg: "bg-yellow-500", text: "text-black" },
  electric: { bg: "bg-yellow-500", text: "text-black" },
};

export const ListElement = ({ typePokemon }: { typePokemon: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2 ">
      {typePokemon.map((type) => {
        const lowerType = type.toLowerCase();
        return (
          <div
            key={lowerType}
            className={`rounded-full w-16 md:w-20 text-center text-sm md:text-base ${elementColor[lowerType].bg} ${elementColor[lowerType].text}  `}
          >
            {type}
          </div>
        );
      })}
    </div>
  );
};
