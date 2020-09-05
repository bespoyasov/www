import React from "react";
import { Metadata } from "@domain/metadata";
import { absoluteUrlFor } from "./absoluteUrl";
import styles from "./RssEntry.module.css";

type RssEntryProps = {
  entry: Metadata;
};

export const RssEntry: React.FC<RssEntryProps> = ({ entry }) => {
  const { slug, title, datetime } = entry;

  // eslint-disable-next-line @typescript-eslint/no-var-requires
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
