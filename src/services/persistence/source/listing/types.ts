import type { PostId } from "@core/post";
import type { QueryKind } from "@persistence/types";

export type QueryListing = (query: QueryKind) => List<PostId>;
