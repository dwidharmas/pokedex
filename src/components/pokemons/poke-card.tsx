import Image from "next/image"
import Link from "next/link"

export default function PokeCard ({id, name}: any) {
  return (
    <Link href="#" className="block">
       <Image src={`${process.env.SPRITES_URL}${id}.png`} alt={name} height={120} width={120} />
      <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">{name}</h3>
    </Link>
  )
}