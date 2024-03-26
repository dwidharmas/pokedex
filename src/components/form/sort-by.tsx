'use client'

import { useState } from "react"

type Props = {
  readonly sortBy: (e: string) => void
}


export default function SortBy({ sortBy }: Props) {
  const [open, setOpen] = useState(false)
  const [sortText, setSortText] = useState('Sort by ID')
  
  const handleClick = () => {
    setOpen((prev) => {
      return !prev
    })
  }

  const clickSort = (val: string) => {
    sortBy(val)
    setSortText(val === 'id' ? 'Sort by ID' : 'Sort by Name')
    handleClick()
  }

  return (
    <div className="relative">
      <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
        <div
          className="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
        >
          {sortText}
        </div>

        <button onClick={handleClick} className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700">
          <span className="sr-only">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {
        open && (
          <div
            className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
            role="menu"
          >
            <div className="p-2">
              <button
                onClick={() => clickSort('id')}
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                Sort by ID
              </button>

              <button
                onClick={() => clickSort('name')}
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                Sort by Name
              </button>
            </div>
          </div>
        )
      }
    </div>
  )
}