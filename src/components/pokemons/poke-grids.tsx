import PokeCard from "./poke-card";

export default function PokeGrid({pokemons} : any) {
  return (
    <ul className="grid grid-cols-9 gap-2">
      {
        pokemons?.map((pokemon:any) => <li key={pokemon.id}>
          <PokeCard id={pokemon.id} name={pokemon.name} /></li>)
      }
    </ul>
  )
}