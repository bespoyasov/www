import type { GetStaticProps } from "next";
import type { FeedEntry, FeedProps } from "@views/Feed";
import type { Metadata } from "@core/metadata";

import { notesMetadata, fetchNote } from "@services/network";
import { Feed as RssPage } from "@views/Feed";

async function createEntry(metadata: Metadata): Promise<FeedEntry> {
  const postId = metadata.slug.replace("/blog/", "");
  const contents = await fetchNote(postId);
  return { contents, metadata };
}

export const getStaticProps: GetStaticProps<FeedProps> = async () => {
  const metadata = notesMetadata();
  const entries = await Promise.all(metadata.map(createEntry));

  return {
    props: {
      entries,
    },
  };
};

export default RssPage;
