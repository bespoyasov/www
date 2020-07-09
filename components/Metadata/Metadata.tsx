import React from "react";
import { Metadata as MetadataType } from "@domain/metadata/types";
import { Tags } from "@components/Tags";
import { toLocalizedDateString } from "./toLocalizedDateString";
import styles from "./Metadata.module.css";

type Props = {
  metadata: MetadataType;
};

export const Metadata: React.FC<Props> = ({ metadata }) => {
  const { datetime, tags } = metadata;

  return (
    <footer className={styles.metadata}>
      <time dateTime={datetime}>{toLocalizedDateString(datetime)}</time>
      {!!tags && <Tags tags={tags} />}
    </footer>
  );
};
