type List<TValue> = Readonly<TValue[]>;
type Dict<TValue> = Readonly<Record<string, TValue>>;
type Collection<TValue> = List<TValue> | Dict<TValue>;

type AnyList = List<unknown>;
type AnyObject = Dict<unknown>;
type AnyCollection = Collection<unknown>;
