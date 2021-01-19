type List<TEntity> = TEntity[];
type Dict<TValue> = Record<string, TValue>;
type Collection<TValue> = List<TValue> | Dict<TValue>;

type Nullable<TEntity> = TEntity | null;
type Optional<TEntity> = TEntity | undefined;
type Unique<TEntity> = TEntity;

type AnyComparable = string | number;
type Comparable<TEntity extends AnyComparable> = TEntity;

type AnyObject = Dict<unknown>;
type AnyList = List<unknown>;
type AnyCollection = Collection<unknown>;
