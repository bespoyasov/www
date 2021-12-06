import { ImageExtension } from "@domain/image";
import { Metadata } from "@domain/metadata";
import { Picture } from "@components/Picture";
import { imageSourceFor } from "./imageSourceFor";
import styles from "./Cover.module.css";

type CoverProps = {
  for: Metadata;
  withExtension?: ImageExtension;
};

export const Cover = ({ for: entity, withExtension = "png" }: CoverProps) => {
  const { title } = entity;
  const source = imageSourceFor(entity, withExtension);

  return (
    <div className={styles.cover}>
      <Picture src={source} alt={title} />
    </div>
  );
};
