type DefaultComparable = string | number;
export type Comparable<TValue extends DefaultComparable = DefaultComparable> = TValue;

type CompareResult = -1 | 0 | 1;
export type CompareFunction<T> = (a: T, b: T) => CompareResult;
export type TransformFunction<T> = (x: T) => Comparable;
