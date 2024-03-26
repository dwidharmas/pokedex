
'use client'
import { useState } from "react";
import dynamic from 'next/dynamic'
import { ParamsPokemonMain, PropsPokemonMain } from "@/interface/pokemon";


const PokeMainHeader = dynamic(() => import("./poke-main-header"), {
  loading: () => (<div>Loading ...</div>)
})
const PokeMainContent = dynamic(() => import("./poke-main-content"), {
  loading: () => (<div>Loading ...</div>)
})


export default function PokeMain(props: PropsPokemonMain) {
  const [headerData, setHeaderData] = useState<ParamsPokemonMain>({ search: '', filter: [], sort: ''})

  const handlePokeHeader = (val: ParamsPokemonMain) => {
    setHeaderData(val)
  }
  

  return (
    <>
      <header className="flex flex-row items-center space-x-2 mb-4">
        <PokeMainHeader pokeHeader={(val) => handlePokeHeader(val)} />
      </header>
      <main>
        <PokeMainContent pokeHeader={headerData} {...props} />
      </main>
    </>
  )
}