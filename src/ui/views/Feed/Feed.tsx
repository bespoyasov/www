import Head from "next/head";

import { Description } from "@components/Description";
import { FeedEntry } from "@components/FeedEntry";

import { isProduction } from "@env/runtime";
import { sizeOf } from "@utils/sizeOf";

import type { FeedProps } from "./types";
import { translated } from "@translation";

export const Feed = ({ entries }: FeedProps) => {
  const maxAmount = isProduction() ? sizeOf(entries) : 5;
  const latest = entries.slice(0, maxAmount);

  return (
    <main>
      <Head>
        <title>{translated.feed.title}</title>
        <Description>{translated.feed.description}</Description>
      </Head>

      {latest.map(({ metadata, contents }) => (
        <FeedEntry metadata={metadata} contents={contents} key={metadata.slug} />
      ))}
    </main>
  );
};
