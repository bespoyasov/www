import type { GrayMatterFile } from "gray-matter";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import type { SerializeOptions } from "next-mdx-remote/dist/types";

type SerializeSource = string;
type SerializeResult = Promise<MDXRemoteSerializeResult>;
export type Serialize = (source: SerializeSource, options?: SerializeOptions) => SerializeResult;

type ParseSource = string;
type ParseResult = GrayMatterFile<string>;
export type Parse = (source: ParseSource) => ParseResult;

export type Settings = {
  serialize: SerializeOptions;
};
