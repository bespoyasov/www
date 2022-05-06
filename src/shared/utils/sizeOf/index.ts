import { isCollection } from "@utils/isCollection";

type CollectionSize = number;

export function sizeOf<TCollection extends SomeCollection>(
  collection: TCollection,
): CollectionSize {
  if (!isCollection(collection)) throw new Error("Collection must be a list or an object.");
  if (typeof collection.length === "number") return collection.length;
  return Object.keys(collection).length;
}
