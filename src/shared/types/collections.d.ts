type List<TValue> = Readonly<TValue[]>;
type Dict<TKey, TValue> = Readonly<Record<TKey, TValue>>;
type Collection<TValue> = List<TValue> | Dict<string, TValue>;

type AnyList = List<unknown>;
type AnyObject = Dict<string, unknown>;
type AnyCollection = Collection<unknown>;
