'use client'
import PokeGrid from "@/components/pokemons/poke-grids";
import { ParamsPokemonMain, Pokemon } from "@/interface/pokemon";
import { getPokemonsWithDetail } from "@/libs/hooks/pokemons";
import filterType from "@/libs/utils/filter";
import searchText from "@/libs/utils/search";
import { sortBy } from "@/libs/utils/sort";
import { useEffect, useMemo, useState } from "react";


type Props = {
  readonly pokeHeader: ParamsPokemonMain
}


export default function PokeMainContent({pokeHeader}: Props) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState(false)

  const fetchAllPokemon = async () => {
    setLoading(true)
    const allPokemon = await getPokemonsWithDetail()
    setPokemons(allPokemon)
    setLoading(false)
  }

  useEffect(() => {
    fetchAllPokemon()
  }, [])

  const choosenPokemon = useMemo(() => {
    const sorted = pokeHeader.sort ? sortBy(pokemons, pokeHeader.sort) : pokemons
    const searched = pokeHeader.search ? searchText(sorted, pokeHeader.search) : sorted
    const filtered = pokeHeader.filter.length > 0 ? filterType(searched, pokeHeader.filter) : searched
    return filtered
  }, [pokemons, pokeHeader])
  
  if (loading) {
    return (
      <div className="w-full flex justify-center my-8 py-8">
        <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-red-600" />
      </div>
    )
  }

  return <PokeGrid pokemons={choosenPokemon} />
}