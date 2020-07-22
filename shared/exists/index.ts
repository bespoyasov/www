type IsTruthy<TEntity> = boolean;

export function exists<TEntity>(entity: TEntity): IsTruthy<TEntity> {
  return !!entity;
}
