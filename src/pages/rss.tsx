import type { FeedEntry, FeedProps } from "@views/Feed";

import { Feed as RssPage } from "@views/Feed";

import { Metadata } from "@domain/metadata";
import { PostContents } from "@domain/post";
import { blogPostsMetadata, fetchBlogPost } from "@network/fetch";
import { isProduction } from "@utils/env";
import { sizeOf } from "@utils/sizeOf";

type Entry = {
  metadata: Metadata;
  contents: PostContents;
};

type RssProps = {
  entries: List<Entry>;
};

async function createEntry(metadata: Metadata): Promise<Entry> {
  const postId = metadata.slug.replace("/blog/", "");
  const contents = await fetchBlogPost(postId);
  return { contents, metadata };
}

export const getStaticProps: GetStaticProps<FeedProps> = async () => {
  const entries = await Promise.all(metadata.map(createEntry));

  return {
    props: {
      entries,
    },
  };
};

export default RssPage;
