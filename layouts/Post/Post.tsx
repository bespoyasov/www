import React from "react";
import { MDXProvider } from "@mdx-js/react";

import { Blockquote } from "@components/Blockquote";
import { Highlight } from "@components/Highlight";
import { LinkProxy } from "@components/LinkProxy";
import { Picture } from "@components/Picture";
import styles from "./Post.module.css";

const substitutes = {
  blockquote: Blockquote,
  mark: Highlight,
  img: Picture,
  a: LinkProxy,
};

export const PostLayout: React.FC = ({ children }) => {
  return (
    <MDXProvider components={substitutes}>
      <div className={styles.post}>{children}</div>
    </MDXProvider>
  );
};
