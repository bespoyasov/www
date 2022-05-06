import { sizeOf } from "@shared/sizeOf";
import { chunk } from "@shared/chunk";

type PartsCount = number;

export function splitInto<TList extends AnyList>(list: TList, parts: PartsCount = 1): List<TList> {
  if (parts < 1) throw new Error("Cannot split an array into fewer than 1 part.");

  const chunkSize = Math.ceil(sizeOf(list) / parts);
  return chunk(list, chunkSize);
}
