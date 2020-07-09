import React from "react";
import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import { Metadata as MetadataType } from "@domain/metadata/types";
import { Blockquote } from "@components/Blockquote";
import { Metadata } from "@components/Metadata";
import styles from "./Post.module.css";

type Props = {
  metadata: MetadataType;
};

export const PostLayout: React.FC<Props> = ({ metadata, children }) => {
  const { title, description } = metadata;

  return (
    <MDXProvider components={{ blockquote: Blockquote }}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className={styles.post}>
        <main>{children}</main>
        <Metadata metadata={metadata} />
      </div>
    </MDXProvider>
  );
};
