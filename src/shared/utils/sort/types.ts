export enum SortDirection {
  Ascending = "asc",
  Descending = "desc",
}

export enum CompareResult {
  AThenB = -1,
  BThenA = 1,
  Equal = 0,
}

export type CompareFunction<TComparable> = (a: TComparable, b: TComparable) => CompareResult;
