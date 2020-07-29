import React from "react";
import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import { Metadata as MetadataType } from "@domain/metadata";
import { Description } from "@components/Description";
import { Blockquote } from "@components/Blockquote";
import { Highlight } from "@components/Highlight";
import { LinkProxy } from "@components/LinkProxy";
import { Metadata } from "@components/Metadata";
import { Picture } from "@components/Picture";
import styles from "./Post.module.css";

type Props = {
  metadata: MetadataType;
};

const substitutes = {
  blockquote: Blockquote,
  mark: Highlight,
  img: Picture,
  a: LinkProxy,
};

export const PostLayout: React.FC<Props> = ({ metadata, children }) => {
  const { title, description } = metadata;

  return (
    <MDXProvider components={substitutes}>
      <Head>
        <title>{title}</title>
        <Description>{description}</Description>
      </Head>
      <div className={styles.post}>
        <main>{children}</main>
        <Metadata metadata={metadata} />
      </div>
    </MDXProvider>
  );
};
