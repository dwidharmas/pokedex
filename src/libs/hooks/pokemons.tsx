import myApi from "../utils/myApi"

export async function getPokemons() {
  const data = await myApi.get('pokedex/updated-alola');
  return data
}

export async function getPokemon(params: string | number) {
  const data = await myApi.get(`pokemon/${params}`);
  return data
}

export async function modifiedAllPokemon(entries: any[]) {
  const modified = entries.map(async ent => {
    const url = ent.pokemon_species.url
    const temp = url.split('/')
    const id = temp[temp.length - 2]
    const pokemon = await getPokemon(id)
    return {
      id: pokemon.data.id,
      name: pokemon.data.name,
      sprites: pokemon.data.sprites.front_shiny,
      type: pokemon.data.types,
    }
  })

  console.log('mod ', modified)

  return modified
}

export async function getPokemonSpecies(id: number) {
  const data = await myApi.get(`pokemon-species/${id}`)
  return data
}