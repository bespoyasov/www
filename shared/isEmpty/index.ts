import { AnyCollection } from "shared/types";
import { sizeOf } from "@shared/sizeOf";

export function isEmpty<TCollection extends AnyCollection>(collection: TCollection): boolean {
  return sizeOf(collection) === 0;
}
