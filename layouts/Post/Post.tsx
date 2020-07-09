import React from "react";
import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import { Blockquote } from "@components/Blockquote";
import { PostMetadata } from "./types";
import styles from "./Post.module.css";

type Props = {
  metadata: PostMetadata;
};

export const PostLayout: React.FC<Props> = ({ metadata, children }) => {
  const { title, description } = metadata;

  return (
    <main className={styles.post}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <MDXProvider components={{ blockquote: Blockquote }}>{children}</MDXProvider>
    </main>
  );
};
