'use client'

import { ChangeEvent, useState } from "react"

type Props = {
  readonly filter: (e: string[]) => void
}

const pokeTypes = [
  'normal',
  'fire',
  'water',
  'electric',
  'grass',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dragon',
  'dark',
  'steel',
  'fairy',
]; 


export default function SortBy({ filter }: Props) {
  const [open, setOpen] = useState(false)
  const [types, setTypes] = useState<string[]>([])
  
  const handleClick = () => {
    setOpen((prev) => {
      return !prev
    })
  }

  const handleType = (e: ChangeEvent<HTMLInputElement>, type: string) => {
    let temp = types
    if (e.target.checked) {
      temp = [...temp, type]
    } else {
      temp = temp.filter(val => val !== type)
    }

    filter(temp)
    setTypes((prev) => {
      return temp
    })
  }

  return (
    <div className="relative">
      <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
        <div
          className="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
        >
          Filter by Type
        </div>

        <button onClick={handleClick} className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700">
          <span className="sr-only">Menu</span>
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4.6C3 4.03995 3 3.75992 3.10899 3.54601C3.20487 3.35785 3.35785 3.20487 3.54601 3.10899C3.75992 3 4.03995 3 4.6 3H19.4C19.9601 3 20.2401 3 20.454 3.10899C20.6422 3.20487 20.7951 3.35785 20.891 3.54601C21 3.75992 21 4.03995 21 4.6V6.33726C21 6.58185 21 6.70414 20.9724 6.81923C20.9479 6.92127 20.9075 7.01881 20.8526 7.10828C20.7908 7.2092 20.7043 7.29568 20.5314 7.46863L14.4686 13.5314C14.2957 13.7043 14.2092 13.7908 14.1474 13.8917C14.0925 13.9812 14.0521 14.0787 14.0276 14.1808C14 14.2959 14 14.4182 14 14.6627V17L10 21V14.6627C10 14.4182 10 14.2959 9.97237 14.1808C9.94787 14.0787 9.90747 13.9812 9.85264 13.8917C9.7908 13.7908 9.70432 13.7043 9.53137 13.5314L3.46863 7.46863C3.29568 7.29568 3.2092 7.2092 3.14736 7.10828C3.09253 7.01881 3.05213 6.92127 3.02763 6.81923C3 6.70414 3 6.58185 3 6.33726V4.6Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {
        open && (
          <fieldset
            className="absolute end-0 z-10 mt-2 w-40 rounded-md border-4 border-gray-100 bg-white shadow-lg"
          >
            <div className="p-2">
              {
                pokeTypes.map((type:string) => (
                  <div key={type} className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input checked={types.includes(type)} onChange={(e) => handleType(e, type)} id={type} name={type} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                    </div>
                    <div className="text-base leading-6">
                      <label htmlFor={type} className="font-medium text-gray-900 capitalize">{type}</label>
                    </div>
                  </div>
                ))
              }

            </div>
          </fieldset>
        )
      }
    </div>
  )
}