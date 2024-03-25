import { getPokemon, getPokemonSpecies } from "@/libs/hooks/pokemons";
import { PokemonTypes } from "@/interface/pokemon";
import Image from "next/image";
import PokeType from "@/components/pokemons/poke-type";

// async function ContentPokemon({ id }: any) {
//   const {data:pokemon} = await getPokemon(id)
//   const {data:species} = await getPokemonSpecies(id)

//   console.log('pokemon ', species)

//   return (
//     <>

//     </>
//   )
// }

export default async function PokemonPage({params}:any) {

  const {data:pokemon} = await getPokemon(params.id)
  const {data:species} = await getPokemonSpecies(params.id)


  return (
    <div className="container bg-white m-auto p-4 rounded-xl border border-red-100">
      <header>Pokemon Detail</header>
      <main className="grid grid-cols-2 space-x-4">
        {/* <ContentPokemon id={params.id}/> */}
        <div className="p-8 border-2 border-slate-200">
          <Image className={'mx-auto'} src={`${process.env.POKEMONDB_URL}/artwork/large/${pokemon.name}.jpg`} alt={pokemon.name} width={250} height={250} priority/>
        </div>
        <div className="flex flex-col">
          <header className="grid grid-cols-9 grow-0 pl-4 items-center bg-red-300 mb-4">
            <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={40} height={40} />
            <p className="font-bold text-xl text-white col-span-2">No. {pokemon.id}</p>
            <div className="grid grid-cols-subgrid offset-1 col-span-6 bg-slate-700 h-full items-center">
              <p className="font-bold text-xl text-white col-start-2 capitalize">{pokemon.name}</p>
            </div>
          </header>
          <main className="flex flex-col grow space-y-2">
            <p className="bg-red-200 py-2 w-full font-bold text-center text-xl text-slate-500 col-span-2">Pokemon Evolution</p>
            <div className="grid grid-cols-2">
              <div className="bg-red-200 py-2 font-bold text-center text-lg text-slate-500 border-b-4 border-slate-500 ">
                Types
              </div>
              <div className="bg-red-100 py-2 px-4 font-bold  text-lg text-black flex flex-row gap-1">
                {
                  pokemon.types.map((type: PokemonTypes )=> <PokeType key={type.slot} type={type.type.name} />)
                }
              </div>
              <div className="bg-red-200 py-2 font-bold text-center text-lg text-slate-500 border-b-4 border-slate-500 ">Height</div>
              <div className="bg-red-100 py-2 px-4 font-bold  text-lg text-black">
                {pokemon.height / 10} m
              </div>
              <div className="bg-red-200 py-2 font-bold text-center text-lg text-slate-500 border-b-4 border-slate-500 ">Weight</div>
              <div className="bg-red-100 py-2 px-4 font-bold  text-lg text-black">
                {pokemon.weight / 10} kg
              </div>
              <div className="bg-red-200 py-2 font-bold text-center text-lg text-slate-500 content-center">Ability</div>
              <div className="bg-red-100 py-2 px-4 font-bold  text-lg text-black">
                <ul className="list-disc pl-2">
                  {
                    pokemon.abilities.map((ab: any) => (
                      <li className="capitalize" key={ab.slot}>{ab.ability.name} {ab.is_hidden ? '(hidden)' : ''}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <p className="bg-red-100 grow content-center text-slate-500 text-italic px-8 h-max grow">
                {species.flavor_text_entries[0].flavor_text}
            </p>
          </main>
        </div>
      </main>
    </div>
  )
}