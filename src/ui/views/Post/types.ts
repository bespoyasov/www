import type { Metadata } from "@core/metadata";
import type { PostContents } from "@core/post";

export type PostProps = {
  contents: PostContents;
  metadata: Metadata;
  prevPost: Nullable<Metadata>;
  nextPost: Nullable<Metadata>;
};
