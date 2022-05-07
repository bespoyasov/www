import type { CompareFunction, TransformFunction } from "./types";
import { SortResult, SortOrder } from "./const";

export function sorterFor<TSortable>(
  transform: TransformFunction<TSortable>,
  direction: SortOrder = SortOrder.Ascending,
): CompareFunction<TSortable> {
  return function sort(a: TSortable, b: TSortable): SortResult {
    const ascending = direction === SortOrder.Ascending;
    const result = ascending ? SortResult.AThenB : SortResult.BThenA;
    return transform(a) < transform(b) ? result : -result;
  };
}
