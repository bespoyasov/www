import { AnyObject, AnyComparable } from "@shared/types";

export enum SortDirection {
  Ascending = "asc",
  Descending = "desc",
}

type TransformFunction = (arg: AnyObject) => AnyComparable;
type CompareFunction = (a: AnyObject, b: AnyObject) => number;

export function sortWith(
  transform: TransformFunction,
  direction: SortDirection = SortDirection.Ascending,
): CompareFunction {
  return function (a: AnyObject, b: AnyObject): number {
    const compareResult = direction === SortDirection.Ascending ? -1 : 1;
    return transform(a) < transform(b) ? compareResult : -compareResult;
  };
}
