import { Pokemon } from "@/interface/pokemon";


export function sortById(items: any[]) {
  return items.sort((a, b) => {
    return a.id - b.id
  })
}