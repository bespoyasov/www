import { Blockquote } from "@components/Blockquote";
import { InlineCode } from "@components/InlineCode";
import { Highlight } from "@components/Highlight";
import { LinkProxy } from "@components/LinkProxy";
import { CodeBlock } from "@components/CodeBlock";
import { Redirect } from "@components/Redirect";
import { YouTube } from "@components/YouTube";
import { Figure } from "@components/Figure";
import { Table } from "@components/Table";

const standardComponents = {
  blockquote: Blockquote,
  inlineCode: InlineCode,
  table: Table,
  mark: Highlight,
  pre: CodeBlock,
  img: Figure,
  a: LinkProxy,
};

const customComponents = {
  Redirect,
  YouTube,
  Figure,
};

export const substitutes = {
  ...standardComponents,
  ...customComponents,
};
