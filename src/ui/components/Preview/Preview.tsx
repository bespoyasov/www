import Link from "next/link";

import type { Metadata } from "@core/metadata";
import { Picture } from "@components/Picture";
import styles from "./Preview.module.css";

type PreviewProps = {
  metadata: Metadata;
};

export const Preview = ({ metadata }: PreviewProps) => {
  const { slug, title, description, cover } = metadata;

  return (
    <div className={styles.preview}>
      <Picture src={cover} alt={title} />
      <h2>
        <Link href={slug}>
          <a className="text-color">{title}</a>
        </Link>
      </h2>
      <p>{description}</p>
    </div>
  );
};
