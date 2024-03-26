 
export interface PokemonSprites {
  front_shiny: string
}
export interface Pokemon {
  id: number,
  name: string,
  sprites: string,
  types: string[],
}

export interface PokemonDetail {
  id: number,
  name: string,
  sprites: PokemonSprites,
  types: PokemonTypes[],
  height: number,
  weight: number,
  abilities: any
}

export interface PokemonFlavorText {
  flavor_text: string
  language: {
    name: string
  },
  version: {
    name: string
  }
}

export interface PokemonSpecies {
  flavor_text_entries: PokemonFlavorText[]
}

export interface PokemonTypes {
  slot: number,
  type: { 
    name: string,
    url: string,
  }
}

export type ParamsPokemonMain = {
  search: string
  filter: string[]
  sort: string
}