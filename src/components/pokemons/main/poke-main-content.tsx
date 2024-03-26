import PokeGrid from "@/components/pokemons/poke-grids";
import { ParamsPokemonMain, Pokemon } from "@/interface/pokemon";
import filterType from "@/libs/utils/filter";
import searchText from "@/libs/utils/search";
import { sortBy } from "@/libs/utils/sort";
import { useMemo } from "react";

type Props = {
  readonly pokeHeader: ParamsPokemonMain;
};

export default function PokeMainContent({
  pokeHeader,
  specialPokemon,
  pokemons,
}: any) {
  const listPokemons = useMemo(() => {
    const sorted = pokeHeader.sort
      ? sortBy(pokemons, pokeHeader.sort)
      : pokemons;
    const searched = pokeHeader.search
      ? searchText(sorted, pokeHeader.search)
      : sorted;
    const filtered =
      pokeHeader.filter.length > 0
        ? filterType(searched, pokeHeader.filter)
        : searched;

    return filtered;
  }, [pokeHeader, pokemons]);

  const specialItem = useMemo(() => {
    const searched =
      pokeHeader.search && specialPokemon
        ? JSON.stringify(specialPokemon.id).includes(pokeHeader.search) ||
          specialPokemon.name.includes(pokeHeader.search)
        : true;
    const filtered =
      pokeHeader.filter.length > 0 && specialPokemon
        ? pokeHeader.filter.some((el: string) =>
            specialPokemon.types.includes(el)
          )
        : true;

    return filtered && searched ? specialPokemon : undefined;
  }, [pokeHeader, specialPokemon]);

  return <PokeGrid pokemons={listPokemons} specialPokemon={specialItem} />;
}
