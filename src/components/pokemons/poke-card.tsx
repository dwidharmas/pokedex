'use client'
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

export default function PokeCard ({id, name, sprites, types, special, ...props}: any) {

  useEffect(() => {
    console.log('types ', types)
  }, [types])

  return (
    <Link href="#" {...props}>
       <Image src={sprites} alt={name} height={120} width={120} />
      <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">{special? `${name}` : `${id}-${name}`}</h3>
    </Link>
  )
}