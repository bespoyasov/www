import React from "react";
import { Metadata as MetadataType } from "@domain/metadata";
import { DateTime } from "@components/DateTime";
import { Tags } from "@components/Tags";
import styles from "./Metadata.module.css";

type MetadataProps = {
  metadata: MetadataType;
};

export const Metadata: React.FC<MetadataProps> = ({ metadata }) => {
  const { datetime, tags } = metadata;

  return (
    <footer className={styles.metadata}>
      <DateTime datetime={datetime} />
      <Tags tags={tags} />
    </footer>
  );
};
