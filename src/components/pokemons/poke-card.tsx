// 'use client'
import Image from "next/image"
import Link from "next/link"
// import { useEffect } from "react"

const bgPoke = {
	normal: 'bg-poke-normal',
	fire: 'bg-poke-fire',
	water: 'bg-poke-water',
	electric: 'bg-poke-electric',
	grass: 'bg-poke-grass',
	ice: 'bg-poke-ice',
	fighting: 'bg-poke-fighting',
	poison: 'bg-poke-poison',
	ground: 'bg-poke-ground',
	flying: 'bg-poke-flying',
	psychic: 'bg-poke-psychic',
	bug: 'bg-poke-bug',
	rock: 'bg-poke-rock',
	ghost: 'bg-poke-ghost',
	dragon: 'bg-poke-dragon',
	dark: 'bg-poke-dark',
	steel: 'bg-poke-steel',
	fairy: 'bg-poke-fairy',
}; 

export default function PokeCard ({id, name, sprites, types, special, ...props}: any) {

  return (
    <Link href="#" {...props}>
      <Image className="flex-grow" src={sprites} alt={name} height={120} width={120} />
      <h3 className="mt-4 text-base text-center font-bold text-gray-900 sm:text-lg">{special? `${name}` : `${id}-${name}`}</h3>
      <div className="flex flex-wrap justify-center py-1 bg-red-200 w-full">
        {
          types.map((type: string) => (
            <div key={type} className={`text-white text-center w-fit px-3 rounded-xl ${bgPoke[type as keyof typeof bgPoke]}`}>{type}</div>
          ))
        }
      </div>
    </Link>
  )
}