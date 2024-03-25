
export interface Pokemon {
  id: number,
  name: string,
  sprites: string,
  types: string[],
}

export interface PokemonTypes {
  slot: number,
  type: { 
    name: string,
    url: string,
  }
}