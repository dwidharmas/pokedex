"use client";
import FilterModal from "@/components/form/filter-modal";
import SearchBar from "@/components/form/search-bar";
import SortBy from "@/components/form/sort-by";
import { useEffect, useState } from "react";
import { ParamsPokemonMain } from "@/interface/pokemon";

type Props = {
  readonly pokeHeader: (e: ParamsPokemonMain) => void;
};
export default function PokeHeaderMainHeader({ pokeHeader }: Props) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string[]>([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    pokeHeader({ search, filter, sort });
  }, [search, filter, sort]);

  return (
    <>
      <SearchBar search={(val: string) => setSearch(val)} />
      <SortBy sortBy={(val: string) => setSort(val)} />
      <FilterModal filter={(val: string[]) => setFilter(val)} />
    </>
  );
}
