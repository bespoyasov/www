type Factory<TEntity, TDependencies> = (di: TDependencies) => TEntity;
type RuntimeSpecified<T> = T;
