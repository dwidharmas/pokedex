"use client";
import { useMemo, useState } from "react";
import DetailHeader from "./detail-header";
import PokeContent from "./poke-content";
import { PokemonDetail, PokemonSpecies } from "@/interface/pokemon";

type Props = {
  readonly pokemon: PokemonDetail;
  readonly species: PokemonSpecies;
};

export default function PokeDetail({ pokemon, species }: Props) {
  const [language, setLanguage] = useState("en");

  const flavorText = useMemo(() => {
    const entries = species.flavor_text_entries.find(
      (entry) =>
        entry.language.name === language &&
        (entry.version.name === "sun" || entry.version.name === "moon")
    );
    return JSON.stringify(entries?.flavor_text);
  }, [language, species]);

  return (
    <>
      <header className="flex items-center justify-between py-2">
        <DetailHeader
          title={pokemon.name}
          language={language}
          onClick={(val) => setLanguage(val)}
        />
      </header>
      <main className="grid grid-cols-2 space-x-4">
        <PokeContent pokemon={pokemon} flavor_text={flavorText} />
      </main>
    </>
  );
}
