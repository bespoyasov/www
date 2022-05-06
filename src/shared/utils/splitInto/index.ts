import { sizeOf } from "@utils/sizeOf";
import { chunk } from "@utils/chunk";

type PartsCount = number;

export function splitInto<TList extends SomeList>(list: TList, parts: PartsCount = 1): List<TList> {
  if (parts < 1) throw new Error("Cannot split an array into fewer than 1 part.");

  const chunkSize = Math.ceil(sizeOf(list) / parts);
  return chunk(list, chunkSize);
}
