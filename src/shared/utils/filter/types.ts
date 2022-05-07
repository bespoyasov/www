export type ShouldKeep = boolean;
export type FilterFunction<TFilterable extends SomeCollection> = (
  entity: TFilterable,
) => ShouldKeep;
