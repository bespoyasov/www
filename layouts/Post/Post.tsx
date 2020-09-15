import React from "react";
import { MDXProvider } from "@mdx-js/react";

import { Blockquote } from "@components/Blockquote";
import { Highlight } from "@components/Highlight";
import { LinkProxy } from "@components/LinkProxy";
import { CodeBlock } from "@components/CodeBlock";
import { Figure } from "@components/Picture";
import { Table } from "@components/Table";
import styles from "./Post.module.css";

const substitutes = {
  blockquote: Blockquote,
  table: Table,
  mark: Highlight,
  pre: CodeBlock,
  img: Figure,
  a: LinkProxy,
};

export const PostLayout: React.FC = ({ children }) => {
  return (
    <MDXProvider components={substitutes}>
      <div className={styles.post}>{children}</div>
    </MDXProvider>
  );
};
