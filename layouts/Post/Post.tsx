import { MDXProvider } from "@mdx-js/react";
import { WithChildren } from "@domain/components";

import { Blockquote } from "@components/Blockquote";
import { InlineCode } from "@components/InlineCode";
import { Highlight } from "@components/Highlight";
import { LinkProxy } from "@components/LinkProxy";
import { CodeBlock } from "@components/CodeBlock";
import { Figure } from "@components/Figure";
import { Table } from "@components/Table";
import styles from "./Post.module.css";

const substitutes = {
  blockquote: Blockquote,
  inlineCode: InlineCode,
  table: Table,
  mark: Highlight,
  pre: CodeBlock,
  img: Figure,
  a: LinkProxy,
};

export const PostLayout = ({ children }: WithChildren) => {
  return (
    <MDXProvider components={substitutes}>
      <div className={styles.post}>{children}</div>
    </MDXProvider>
  );
};
