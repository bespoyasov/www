import { sizeOf } from "@utils/sizeOf";

export function isEmpty<TCollection extends AnyCollection>(collection: TCollection): boolean {
  return sizeOf(collection) === 0;
}
