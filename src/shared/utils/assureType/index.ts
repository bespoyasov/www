export function castTo<TTarget, TOriginal extends unknown = unknown>(entity: TOriginal): TTarget {
  return entity as TTarget;
}
