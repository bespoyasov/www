export function last<T>(list: List<T>): Optional<T> {
  return list[list.length - 1];
}
