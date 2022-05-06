export function isCollection<TCollection extends SomeCollection>(collection: TCollection): boolean {
  return !!collection && typeof collection === "object";
}
