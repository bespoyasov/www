import { Blockquote } from "@components/Blockquote";
import { Code } from "@components/Code";
import { CodeBlock } from "@components/CodeBlock";
import { Figure } from "@components/Figure";
import { LinkProxy } from "@components/LinkProxy";
import { Table } from "@components/Table";

import { Highlight } from "@components/Highlight";
import { SideNote } from "@components/SideNote";

import { Redirect } from "@components/Redirect";
import { Switch } from "@components/Switch";
import { YouTube } from "@components/YouTube";

const standardComponents = {
  a: LinkProxy,
  blockquote: Blockquote,
  code: Code,
  img: Figure,
  pre: CodeBlock,
  table: Table,
};

const htmlSubstitutions = {
  SideNote,
  Highlight,
};

const customComponents = {
  Redirect,
  YouTube,
  Figure,
  Switch,
};

export const substitutes = {
  ...standardComponents,
  ...htmlSubstitutions,
  ...customComponents,
};
