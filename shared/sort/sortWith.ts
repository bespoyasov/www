import { AnyObject, AnyComparable } from "@shared/types";

export enum SortDirection {
  Ascending = "asc",
  Descending = "desc",
}

type Sortable = AnyObject | AnyComparable;
type CompareFunction = (a: Sortable, b: Sortable) => number;
type TransformFunction = (arg: Sortable) => AnyComparable;

export function sortWith(
  transform: TransformFunction,
  direction: SortDirection = SortDirection.Ascending,
): CompareFunction {
  return function (a: Sortable, b: Sortable): number {
    const compareResult = direction === SortDirection.Ascending ? -1 : 1;
    return transform(a) < transform(b) ? compareResult : -compareResult;
  };
}
