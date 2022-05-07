import { isEmpty } from "@utils/isEmpty";
import { readonly } from "@utils/readonly";

type ChunkSize = number;

export function chunk<TList extends SomeList>(array: TList, size: ChunkSize): List<TList> {
  if (isEmpty(array)) return [];

  const head = readonly(array.slice(0, size)) as TList;
  const tail = readonly(array.slice(size)) as TList;
  return [head, ...chunk(tail, size)];
}
