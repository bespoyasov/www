import { Metadata } from "@domain/metadata";
import { absoluteUrlFor } from "./absoluteUrl";
import styles from "./RssEntry.module.css";

type RssEntryProps = {
  entry: Metadata;
};

export const RssEntry = ({ entry }: RssEntryProps) => {
  const { slug, title, datetime } = entry;
  const Contents = require(`../../pages${slug}.mdx`).default;

  return (
    <article
      data-title={title}
      data-link={absoluteUrlFor(slug)}
      data-datetime={datetime}
      className={styles.entry}
    >
      <Contents />
    </article>
  );
};
