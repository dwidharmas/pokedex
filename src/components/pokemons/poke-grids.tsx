import PokeCard from "./poke-card";
import { getPokemon } from "@/libs/hooks/pokemons";
import { PokemonTypes } from "@/interface/pokemon";

async function SpecialPokemon() {
  const specialPokemon = await getPokemon('necrozma-ultra')
  const modifiedPokemon = {
    id: specialPokemon.data.id,
    name: specialPokemon.data.name,
    sprites: specialPokemon.data.sprites.front_shiny,
    types: specialPokemon.data.types.map((arr:PokemonTypes) => arr.type.name)
  }
  
  return <PokeCard className={'bg-slate-100 flex flex-col items-center border border-slate-200 h-full col-start-5'} special={true} {...modifiedPokemon} />
}

export default function PokeGrid({pokemons} : any) {
  return (
    <ul className="grid grid-cols-6 space-x-1 bg-red-100">
      {
        pokemons?.map((pokemon:any) => <li key={pokemon.id}>
          <PokeCard className={'bg-slate-100 flex flex-col items-center border border-slate-200 h-full'} {...pokemon}/></li>)
      }
      <li className="grid grid-cols-subgrid col-span-5">
      { <SpecialPokemon /> }
      </li>
    </ul>
  )
}