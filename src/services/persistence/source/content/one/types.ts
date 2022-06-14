import type { PostId } from "@core/post";
import type { FileContent } from "@persistence/types";

export type QueryPost = (id: PostId) => FileContent;
