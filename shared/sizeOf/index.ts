import { AnyCollection } from "shared/types";

type CollectionSize = number;

export function sizeOf<TCollection extends AnyCollection>(collection: TCollection): CollectionSize {
  if (typeof collection.length === "number") return collection.length;
  return Object.keys(collection).length;
}
