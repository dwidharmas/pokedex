import Image from "next/image";
import Link from "next/link";
import PokeType from "./poke-type";
export default function PokeCard({
  id,
  name,
  sprites,
  types,
  special,
  ...props
}: any) {
  return (
    <Link href={`/${id}`} {...props}>
      <Image
        className="flex-grow"
        src={sprites}
        alt={name}
        height={100}
        width={100}
      />
      <h3 className="mt-4 text-base text-center font-bold text-gray-900 sm:text-lg">
        {special ? `${name}` : `${id}-${name}`}
      </h3>
      <div className="flex flex-wrap justify-center py-1 bg-red-200 w-full">
        {types.map((type: string) => (
          <PokeType key={type} type={type} />
        ))}
      </div>
    </Link>
  );
}
