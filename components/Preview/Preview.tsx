import React from "react";
import Link from "next/link";
import { Metadata } from "@domain/metadata";
import { Cover } from "@components/Cover";
import styles from "./Preview.module.css";

type PreviewProps = {
  metadata: Metadata;
};

export const Preview = ({ metadata }: PreviewProps) => {
  const { slug, title, description } = metadata;

  return (
    <div className={styles.preview}>
      <Cover for={metadata} />
      <h2>
        <Link href={slug}>
          <a className="text-color">{title}</a>
        </Link>
      </h2>
      <p>{description}</p>
    </div>
  );
};
