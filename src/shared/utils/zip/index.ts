import { sizeOf } from "@shared/sizeOf";

export function zip<A, B>(listA: List<A>, listB: List<B>): List<[A, B]> {
  if (sizeOf(listA) !== sizeOf(listB)) return [];
  return listA.map((item, index) => [item, listB[index]]);
}
