export default function PokeType({ type }: any) {
  const bgPoke = {
    normal: "bg-poke-normal",
    fire: "bg-poke-fire",
    water: "bg-poke-water",
    electric: "bg-poke-electric",
    grass: "bg-poke-grass",
    ice: "bg-poke-ice",
    fighting: "bg-poke-fighting",
    poison: "bg-poke-poison",
    ground: "bg-poke-ground",
    flying: "bg-poke-flying",
    psychic: "bg-poke-psychic",
    bug: "bg-poke-bug",
    rock: "bg-poke-rock",
    ghost: "bg-poke-ghost",
    dragon: "bg-poke-dragon",
    dark: "bg-poke-dark",
    steel: "bg-poke-steel",
    fairy: "bg-poke-fairy",
  };

  return (
    <div
      key={type}
      className={`text-white text-center w-fit px-3 rounded-xl ${
        bgPoke[type as keyof typeof bgPoke]
      }`}
    >
      {type}
    </div>
  );
}
