import React from "react";
import Link from "next/link";
import { Metadata } from "@domain/metadata";
import styles from "./Preview.module.css";

type PreviewProps = {
  metadata: Metadata;
};

export const Preview: React.FC<PreviewProps> = ({ metadata }) => {
  const { slug, title, description, preview: cover } = metadata;

  return (
    <div className={styles.preview}>
      {!!cover && <img src={cover} alt={title} />}
      <h2>
        <Link href={slug} as={slug}>
          <a className="text-color">{title}</a>
        </Link>
      </h2>
      <p>{description}</p>
    </div>
  );
};
