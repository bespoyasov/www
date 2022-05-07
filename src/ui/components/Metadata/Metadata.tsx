import type { Metadata as MetadataType } from "@core/metadata";
import { DateTime } from "@components/DateTime";
import { TagList } from "@components/TagList";
import styles from "./Metadata.module.css";

type MetadataProps = {
  metadata: MetadataType;
};

export const Metadata = ({ metadata }: MetadataProps) => {
  const { datetime, tags } = metadata;

  return (
    <footer className={styles.metadata}>
      <DateTime datetime={datetime} />
      <TagList tags={tags} />
    </footer>
  );
};
