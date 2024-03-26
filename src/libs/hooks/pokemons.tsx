import myApi from "../utils/myApi"
import { PokemonTypes } from "@/interface/pokemon";

export async function getPokemons() {
  const data = await myApi.get('pokedex/updated-alola');
  return data
}

export async function getPokemon(params: string | number) {
  const data = await myApi.get(`pokemon/${params}`);
  return data
}

export async function getPokemonSpecies(id: number) {
  const data = await myApi.get(`pokemon-species/${id}`)
  return data
}

export async function getPokemonsWithDetail() {
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

  return modifiedPokemon
}