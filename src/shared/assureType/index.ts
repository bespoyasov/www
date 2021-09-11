export function assureType<TTarget, TOriginal extends unknown = unknown>(
  entity: TOriginal,
): TTarget {
  return <TTarget>entity;
}
