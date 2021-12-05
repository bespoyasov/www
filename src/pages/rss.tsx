import Head from "next/head";
import { GetStaticProps } from "next";

import { Description } from "@components/Description";
import { RssEntry } from "@components/RssEntry";

import { Metadata } from "@domain/metadata";
import { PostContents } from "@domain/post";
import { blogPostsMetadata, fetchBlogPost } from "@api/fetch";
import { isProduction } from "@shared/env";
import { sizeOf } from "@shared/sizeOf";

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

export const getStaticProps: GetStaticProps<RssProps> = async () => {
  const metadata = blogPostsMetadata();
  const entries = await Promise.all(metadata.map(createEntry));

  return {
    props: {
      entries,
    },
  };
};

const Rss = ({ entries }: RssProps) => {
  const maxAmount = isProduction() ? sizeOf(entries) : 5;
  const latest = entries.slice(0, maxAmount);

  return (
    <main>
      <Head>
        <title>Блог Саши Беспоясова</title>
        <Description>Разработка, дизайн, книги.</Description>
      </Head>

      {latest.map(({ metadata, contents }) => (
        <RssEntry metadata={metadata} contents={contents} key={metadata.slug} />
      ))}
    </main>
  );
};

export default Rss;
