'use client'
import Link from "next/link"
import { useState } from "react"

type Props = {
  readonly title: string
  readonly language: string
  readonly onClick: (e:string) => void
}

export default function DetailHeader({title, language, onClick}: Props) {
  const [active, setActive] = useState(language)

  const lang = [
    {id: 'en', val: 'ENG'},
    {id: 'fr', val: 'FRA'},
    {id: 'de', val: 'DEU'},
    {id: 'it', val: 'ITA'},
    {id: 'ja-Hrkt', val: 'JAP'},
    {id: 'ko', val: 'KOR'},
    {id: 'es', val: 'SPA'},
  ]

  const handleClick = (lang: string) => {
    setActive(lang)
    onClick(lang)
  }

  return (
    <>
      <div className="flex flex-row space-x-2">
        <Link className="text-blue-500" href={'/'}>Home</Link> 
        <p className="capitalize">{`> ${title}`}</p>
      </div>
      <div className="flex space-x-2">
        {
          lang.map((lg:{id: string, val: string}) => (
            <button type="button" key={lg.id} className={`p-2 border-4 border-slate-400 ${active === lg.id ? 'bg-red-800 border-red-800 text-white': ''}`} onClick={() => handleClick(lg.id)}>{lg.val}</button>
          ))
        }
      </div>
    </>
  )
}