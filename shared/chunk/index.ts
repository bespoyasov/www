import { List, AnyList } from "@shared/types";
import { isEmpty } from "@shared/isEmpty";

type ChunkSize = number;

export function chunk<TList extends AnyList>(array: TList, size: ChunkSize): List<TList> {
  if (isEmpty(array)) return [];

  const head = <TList>array.slice(0, size);
  const tail = <TList>array.slice(size);
  return [head, ...chunk(tail, size)];
}
