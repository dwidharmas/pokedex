
import PokeGrid from "@/components/pokemons/poke-grids";
import { getPokemon, getPokemons } from "@/libs/hooks/pokemons";
import { sortById } from "@/libs/utils/sort";
import { PokemonTypes } from "@/interface/pokemon";


async function Pokemons() {

  const allPokemon = await getPokemons()
  const entries = allPokemon.data.pokemon_entries;
  const modifiedPokemon = await Promise.all(
    entries.map(async (ent:any) => {
      const url = ent.pokemon_species.url
      const temp = url.split('/')
      const id = temp[temp.length - 2]

      const poke = await getPokemon(id)

      return {
        id: poke.data.id,
        name: poke.data.name,
        sprites: poke.data.sprites.front_shiny,
        types: poke.data.types.map((arr: PokemonTypes) => arr.type.name)
      }
  
    })
  )


  // return <div>Test</div>
  return <PokeGrid pokemons={sortById(modifiedPokemon)} />
  
}

export default function Home() {
  return (
    <main className="container bg-white m-auto p-4 rounded-xl border border-red-100">
      <div className="text-red-400 dark:text-cyan-400">
        <Pokemons />
      </div>
    </main>
  );
}
