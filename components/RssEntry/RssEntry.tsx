import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "@domain/metadata";
import { DateTime } from "@components/DateTime";
import { absoluteUrlFor } from "./absoluteUrl";
import styles from "./RssEntry.module.css";

type RssEntryProps = {
  entry: Metadata;
};

export const RssEntry: React.FC<RssEntryProps> = ({ entry }) => {
  const { slug, title, datetime } = entry;
  const Contents = dynamic(() => import(`../../pages${slug}.mdx`));

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
