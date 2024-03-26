import { Pokemon } from "@/interface/pokemon";

export default function searchText(items: Pokemon[], key: string) {
  return items.filter((item:Pokemon) => JSON.stringify(item.id).includes(key) || item.name.includes(key) )
}