import Image from "next/image";
import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="flex bg-red-600 justify-center mb-4">
      <div className="container justify-between flex flex-row items-center text-white p-4">
        <Link className="flex flex-row items-center" href={"/"}>
          <Image
            className="pr-2"
            src="/pokeball.png"
            alt="pokedex"
            width={40}
            height={24}
            priority
          />
          <h1 className="text-2xl font-bold">Pokedex</h1>
        </Link>
      </div>
    </header>
  );
}
