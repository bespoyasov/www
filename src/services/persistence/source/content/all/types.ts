import type { FileContent } from "@persistence/types";
import type { Dependencies } from "@persistence/composition";

export type QueryPosts = (di?: Dependencies) => List<FileContent>;
