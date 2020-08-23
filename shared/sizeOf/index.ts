import { AnyCollection } from "shared/types";
import { isCollection } from "@shared/isCollection";

type CollectionSize = number;

export function sizeOf<TCollection extends AnyCollection>(collection: TCollection): CollectionSize {
  if (!isCollection(collection)) throw new Error("Collection must be a list or an object.");
  if (typeof collection.length === "number") return collection.length;
  return Object.keys(collection).length;
}
