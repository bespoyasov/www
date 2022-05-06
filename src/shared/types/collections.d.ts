type List<TValue> = Readonly<TValue[]>;
type Dict<TKey, TValue> = Readonly<Record<TKey, TValue>>;
type Collection<TValue> = List<TValue> | Dict<string, TValue>;

type SomeList = List<unknown>;
type SomeDict = Dict<string, unknown>;
type SomeCollection = Collection<unknown>;
