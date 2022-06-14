type Factory<TEntity, TDependencies> = (di: TDependencies) => TEntity;

type Configurable<TDependencies, TMembers extends keyof TDependencies> = Omit<
  TDependencies,
  TMembers
>;
