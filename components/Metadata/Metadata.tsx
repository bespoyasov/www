import React from "react";
import { Metadata as MetadataType } from "@domain/metadata/types";
import { DateTime } from "@components/DateTime";
import { Tags } from "@components/Tags";
import styles from "./Metadata.module.css";

type Props = {
  metadata: MetadataType;
};

export const Metadata: React.FC<Props> = ({ metadata }) => {
  const { datetime, tags } = metadata;

  return (
    <footer className={styles.metadata}>
      <DateTime datetime={datetime} />
      {!!tags && <Tags tags={tags} />}
    </footer>
  );
};
