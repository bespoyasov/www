import { AnyObject, AnyComparable } from "@shared/types";
import { CompareResult, SortDirection } from "./types";

type Sortable = AnyObject | AnyComparable;
type CompareFunction = (a: Sortable, b: Sortable) => CompareResult;
type TransformFunction = (arg: Sortable) => AnyComparable;

export function sortWith(
  transform: TransformFunction,
  direction: SortDirection = SortDirection.Ascending,
): CompareFunction {
  return function (a: Sortable, b: Sortable): CompareResult {
    const ascending = direction === SortDirection.Ascending;
    const result = ascending ? CompareResult.AThenB : CompareResult.BThenA;
    return transform(a) < transform(b) ? result : -result;
  };
}
