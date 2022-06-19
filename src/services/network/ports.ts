import type { Metadata } from "@core/metadata";
import type { PostId } from "@core/post";
import type { PostContents } from "@network/types";

export type FetchContent = (id: PostId) => Promise<PostContents>;
export type FetchListing = () => List<PostId>;
export type FetchMetadata = () => List<Metadata>;
