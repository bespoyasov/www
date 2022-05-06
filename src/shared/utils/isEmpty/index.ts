import { sizeOf } from "@utils/sizeOf";

export function isEmpty<TCollection extends SomeCollection>(collection: TCollection): boolean {
  return sizeOf(collection) === 0;
}
