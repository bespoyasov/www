import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Blockquote } from "@components/Blockquote";
import styles from "./Post.module.css";

export const PostLayout: React.FC = ({ children }) => {
  return (
    <main className={styles.post}>
      <MDXProvider components={{ blockquote: Blockquote }}>{children}</MDXProvider>
    </main>
  );
};
