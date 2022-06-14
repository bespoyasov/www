type Factory<TEntity, TDependencies> = (di: TDependencies) => TEntity;

type RuntimeSpecified<T> = T;
type Configurable<TDependencies, TMembers extends keyof TDependencies> = Omit<
  TDependencies,
  TMembers
>;
