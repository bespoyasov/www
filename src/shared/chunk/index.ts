import { isEmpty } from "@shared/isEmpty";

type ChunkSize = number;

export function chunk<TList extends AnyList>(array: TList, size: ChunkSize): List<TList> {
  if (isEmpty(array)) return [];

  const head = array.slice(0, size) as TList;
  const tail = array.slice(size) as TList;
  return [head, ...chunk(tail, size)];
}
