import { Pokemon } from "@/interface/pokemon";
import dynamic from "next/dynamic";

const PokeCard = dynamic(
  () => import("./poke-card"),
  {
    loading: () => <div className="bg-slate-100 border border-slate-200 p-16 text-center"> . . . </div>
  }
)

type Props = {
  readonly pokemons: Pokemon[],
  readonly specialPokemon: Pokemon | undefined
}

export default function PokeGrid({pokemons, specialPokemon} : Props) {
  return (
    <ul className="grid grid-cols-6 space-x-1 space-y-1 bg-red-100 justify-between items-center">
      {
        pokemons?.map((pokemon:any) => <li key={pokemon.id}>
          <PokeCard className={'bg-slate-100 hover:shadow-2xl hover:shadow-red-700/70 hover:border-red-500 flex flex-col items-center border border-slate-200'} {...pokemon}/></li>)
      }
      <li className="col-start-6">
      { 
        specialPokemon && <PokeCard className={'bg-slate-100 hover:shadow-2xl hover:shadow-red-700/70 hover:border-red-500 flex flex-col items-center border border-slate-200 col-start-5'} special={true} {...specialPokemon} /> 
      }
      </li>
    </ul>
  )
}