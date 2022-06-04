import { Blockquote } from "@components/Blockquote";
import { InlineCode } from "@components/InlineCode";
import { Highlight } from "@components/Highlight";
import { LinkProxy } from "@components/LinkProxy";
import { CodeBlock } from "@components/CodeBlock";
import { Redirect } from "@components/Redirect";
import { SideNote } from "@components/SideNote";
import { YouTube } from "@components/YouTube";
import { Figure } from "@components/Figure";
import { Switch } from "@components/Switch";
import { Table } from "@components/Table";

const standardComponents = {
  blockquote: Blockquote,
  code: InlineCode,
  table: Table,
  aside: SideNote,
  mark: Highlight,
  pre: CodeBlock,
  img: Figure,
  a: LinkProxy,
};

const customComponents = {
  Redirect,
  YouTube,
  Figure,
  Switch,
};

export const substitutes = {
  ...standardComponents,
  ...customComponents,
};
