'use client'
import { useEffect, useState } from "react";
import PokeCard from "./poke-card";
import { getPokemon } from "@/libs/hooks/pokemons";
import { Pokemon } from "@/interface/pokemon";

export default function PokeGrid({pokemons} : any) {
  const [specialPokemon, setSpecialPokemon] = useState<any>()
  useEffect(() => {
    console.log('pokemon ', pokemons)
    getPokemon('necrozma-ultra')
      .then(res => {
        setSpecialPokemon({
          id: res.data.id,
          name: res.data.name,
          sprites: res.data.sprites.front_shiny,
          types: res.data.types.map(arr => arr.type.name)
        })
      })
  }, [pokemons])

  return (
    <ul className="grid grid-cols-9 gap-4">
      {
        pokemons?.map((pokemon:any) => <li key={pokemon.id}>
          <PokeCard {...pokemon}/></li>)
      }
      {
        specialPokemon && (
          <li className="grid grid-cols-subgrid col-span-2">
            <PokeCard className={'col-start-2'} special={true} {...specialPokemon} />
          </li>
        )
      }
    </ul>
  )
}