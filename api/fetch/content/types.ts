import type { GrayMatterFile } from "gray-matter";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import type { SerializeOptions } from "next-mdx-remote/dist/types";

type SerializeSource = string;
type SerializeResult = MDXRemoteSerializeResult;

export type Serializer = (
  source: SerializeSource,
  options?: SerializeOptions,
) => Promise<SerializeResult>;

type ParseSource = string;
type ParseResult = GrayMatterFile<string>;

export type Parser = (source: ParseSource) => ParseResult;
