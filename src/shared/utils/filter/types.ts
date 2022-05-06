export type ShouldKeep = boolean;
export type FilterFunction<TFilterable extends SomeDict> = (entity: TFilterable) => ShouldKeep;
