export function readonly<TType>(value: TType): Readonly<TType> {
  return value as Readonly<TType>;
}
