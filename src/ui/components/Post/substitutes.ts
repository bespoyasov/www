import { Blockquote } from "@components/Blockquote";
import { Code } from "@components/Code";
import { CodeBlock } from "@components/CodeBlock";
import { Figure } from "@components/Figure";
import { Highlight } from "@components/Highlight";
import { LinkProxy } from "@components/LinkProxy";
import { SideNote } from "@components/SideNote";
import { Table } from "@components/Table";

import { Redirect } from "@components/Redirect";
import { Switch } from "@components/Switch";
import { YouTube } from "@components/YouTube";

const standardComponents = {
  a: LinkProxy,
  aside: SideNote,
  blockquote: Blockquote,
  code: Code,
  img: Figure,
  mark: Highlight,
  pre: CodeBlock,
  table: Table,
};

const customComponents = {
  Figure,
  Redirect,
  Switch,
  YouTube,
};

export const substitutes = {
  ...standardComponents,
  ...customComponents,
};
