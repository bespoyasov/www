import type { Metadata } from "@core/metadata";
import type { PostContents } from "@core/post";

import { absoluteUrlFor } from "@core/site";
import { Post } from "@components/Post";
import styles from "./FeedEntry.module.css";

type FeedEntryProps = {
  metadata: Metadata;
  contents: PostContents;
};

export const FeedEntry = ({ metadata, contents }: FeedEntryProps) => {
  const { slug, title, datetime } = metadata;

  return (
    <article
      data-title={title}
      data-link={absoluteUrlFor(slug)}
      data-datetime={datetime}
      className={styles.entry}
    >
      <Post content={contents} as="div" />
    </article>
  );
};
