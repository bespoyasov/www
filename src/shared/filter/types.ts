export type ShouldKeep = boolean;
export type FilterFunction<TFilterable extends AnyObject> = (entity: TFilterable) => ShouldKeep;
