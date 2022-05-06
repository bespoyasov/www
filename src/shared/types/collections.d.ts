type List<TEntity> = TEntity[];
type Dict<TValue> = Record<string, TValue>;
type Collection<TValue> = List<TValue> | Dict<TValue>;

type AnyList = List<unknown>;
type AnyObject = Dict<unknown>;
type AnyCollection = Collection<unknown>;
