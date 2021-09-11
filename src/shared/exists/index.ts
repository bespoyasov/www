// eslint-disable-next-line @typescript-eslint/no-unused-vars
type IsTruthy<TEntity> = boolean;

export function exists<TEntity>(entity: TEntity): IsTruthy<TEntity> {
  return !!entity;
}
