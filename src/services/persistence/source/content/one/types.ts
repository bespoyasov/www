import type { PostId } from "@core/post";
import type { FileContent } from "@persistence/types";
import type { Dependencies } from "@persistence/composition";

export type QueryPost = (id: PostId, di?: Dependencies) => FileContent;
