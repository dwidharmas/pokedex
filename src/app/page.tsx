'use client'
import PokeGrid from "@/components/pokemons/poke-grids";
import { getPokemons } from "@/libs/hooks/pokemons";
import { useEffect, useState } from "react";

function Pokemons() {
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    getPokemons()
      .then((res: any) => {
        const pokemonList = res.data.pokemon_entries.map((pokemon: any) => {
          const species = pokemon.pokemon_species
          const entry_number = pokemon.entry_number
          const array = species.url.split('/')
          return { ...species, entry_number, id: array[array.length - 2]}
        })
        setPokemons(pokemonList)
      })
  }, [])

  return <PokeGrid pokemons={pokemons} />
  
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
