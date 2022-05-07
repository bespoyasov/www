import type { Metadata } from "@core/metadata";
import type { PostContents } from "@core/post";

export type FeedEntry = {
  metadata: Metadata;
  contents: PostContents;
};

export type FeedProps = {
  entries: List<FeedEntry>;
};
