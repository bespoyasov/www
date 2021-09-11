import { Post } from "@components/Post";
import { Metadata } from "@domain/metadata";
import { PostContents } from "@domain/post";
import { absoluteUrlFor } from "@shared/absoluteUrl";
import styles from "./RssEntry.module.css";

type RssEntryProps = {
  metadata: Metadata;
  contents: PostContents;
};

export const RssEntry = ({ metadata, contents }: RssEntryProps) => {
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
