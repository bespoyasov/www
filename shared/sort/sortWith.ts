import { CompareResult, SortDirection, CompareFunction } from "./types";

type Sortable = AnyObject | AnyComparable;
type TransformFunction = (arg: Sortable) => AnyComparable;

export function sortWith(
  transform: TransformFunction,
  direction: SortDirection = SortDirection.Ascending,
): CompareFunction<Sortable> {
  return function (a: Sortable, b: Sortable): CompareResult {
    const ascending = direction === SortDirection.Ascending;
    const result = ascending ? CompareResult.AThenB : CompareResult.BThenA;
    return transform(a) < transform(b) ? result : -result;
  };
}
