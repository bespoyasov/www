import React from "react";
import { Metadata } from "@domain/metadata";
import { DateTime } from "@components/DateTime";
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
    <article className={styles.entry}>
      <h1 data-title>
        <a className="text-color" href={absoluteUrlFor(slug)} data-link>
          {title}
        </a>
      </h1>

      <div data-description>
        <Contents />
      </div>

      <footer data-datetime={datetime}>
        <DateTime datetime={datetime} />
      </footer>
    </article>
  );
};
