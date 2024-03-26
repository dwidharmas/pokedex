import { Pokemon } from "@/interface/pokemon";

export function sortBy(items: Pokemon[], key: string) {
  return items.sort((a, b) => {
    const tempA = a[key as keyof Pokemon];
    const tempB = b[key as keyof Pokemon];
    return tempA > tempB ? 1 : -1;
  });
}
