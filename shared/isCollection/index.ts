import { AnyCollection } from "@shared/types";

export function isCollection<TCollection extends AnyCollection>(collection: TCollection): boolean {
  return !!collection && typeof collection === "object";
}
