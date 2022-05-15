import type { GrayMatterFile } from "gray-matter";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import type { SerializeOptions as SerializeSettings } from "next-mdx-remote/dist/types";

import parse from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

import { serializationConfig } from "@configs/serialization";
import { castTo } from "@utils/assureType";

type SerializeSource = string;
type SerializeResult = MDXRemoteSerializeResult;
type Serializer = (
  source: SerializeSource,
  options?: SerializeSettings,
) => Promise<SerializeResult>;

type ParseSource = string;
type ParseResult = GrayMatterFile<string>;
type Parser = (source: ParseSource) => ParseResult;

export type Dependencies = {
  serialize?: Serializer;
  parse?: Parser;
};

export const dependencies: Dependencies = {
  serialize,
  parse,
};

export type Settings = {
  serializeSettings: SerializeSettings;
};

export const settings: Settings = {
  serializeSettings: {
    mdxOptions: castTo(serializationConfig),
  },
};
