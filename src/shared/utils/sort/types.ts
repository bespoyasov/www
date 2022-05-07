type CompareResult = -1 | 0 | 1;
export type CompareFunction<T> = (a: T, b: T) => CompareResult;
