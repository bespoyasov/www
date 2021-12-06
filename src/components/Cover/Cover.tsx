import { Metadata } from "@domain/metadata";
import { Picture } from "@components/Picture";
import styles from "./Cover.module.css";

type CoverProps = {
  for: Metadata;
};

export const Cover = ({ for: entity }: CoverProps) => {
  const { title, cover } = entity;

  return (
    <div className={styles.cover}>
      <Picture src={cover} alt={title} />
    </div>
  );
};
