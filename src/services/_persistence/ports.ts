import type { PostId } from "@core/post";
import type { FileContent } from "@persistence/types";

export type QueryListing = () => List<PostId>;
export type QueryPost = (id: PostId) => FileContent;
export type QueryPosts = () => List<FileContent>;
