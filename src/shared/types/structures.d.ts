type List<TEntity> = TEntity[];
type Dict<TValue> = Record<string, TValue>;
type Collection<TValue> = List<TValue> | Dict<TValue>;

type AnyComparable = string | number;
type Comparable<TEntity extends AnyComparable> = TEntity;

type AnyObject = Dict<unknown>;
type AnyList = List<unknown>;
type AnyCollection = Collection<unknown>;
