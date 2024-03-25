import { getPokemon, getPokemonSpecies } from "@/libs/hooks/pokemons";
import PokeDetail from "@/components/pokemons/detail/poke-detail";

export default async function PokemonPage({params}:any) {

  try {
    const speciesId = params.id == 10157 ? 800 : params.id
    const {data:pokemon} = await getPokemon(params.id)
    const {data:species} = await getPokemonSpecies(speciesId)

    return (
      <div className="container bg-white m-auto p-4 rounded-xl border border-red-100">
        <PokeDetail pokemon={pokemon} species={species} />
      </div>
    )

  } catch (error) {
    return <div>Error </div>
  }
}