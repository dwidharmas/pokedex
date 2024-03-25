import myApi from "../utils/myApi"

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