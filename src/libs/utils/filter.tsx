import { Pokemon } from "@/interface/pokemon";

export default function filterType(items: Pokemon[], types: string[]) {
  return items.filter((item:Pokemon) => types.some(el => item.types.includes(el)))
}