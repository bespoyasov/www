export type UnixTimeStamp = number;
export type DateTimeIsoString = string;
export type LocalizedDateString = string;

export type RelativePath = string;
export type AbsoluteUrl = string;
export type UrlSlug = string;

export type ClassName = string;

export type List<TEntity> = TEntity[];
export type Dict<TValue> = Record<string, TValue>;

export type Nullable<TEntity> = TEntity | null;
export type Optional<TEntity> = TEntity | undefined;
export type Unique<TEntity> = TEntity;

export type AnyComparable = string | number;
export type Comparable<TEntity extends AnyComparable> = TEntity;

export type AnyObject = Dict<unknown>;
