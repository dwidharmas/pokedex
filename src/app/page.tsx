import PokeMain from "@/components/pokemons/main/poke-main";
import {
  getPokemonsWithDetail,
  getSpecialPokemonWithDetail,
} from "@/libs/hooks/pokemons";

export default async function Home() {
  const pokemons = await getPokemonsWithDetail();
  const specialPokemon = await getSpecialPokemonWithDetail();
  return (
    <div className="container bg-white m-auto p-4 rounded-xl border border-red-100">
      <PokeMain pokemons={pokemons} specialPokemon={specialPokemon} />
    </div>
  );
}
