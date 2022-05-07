import type { PostId } from "@core/post";
import type { Dependencies } from "@persistence/composition";

export type QueryListing = (di?: Dependencies) => List<PostId>;
