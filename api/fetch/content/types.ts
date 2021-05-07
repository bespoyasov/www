import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { SerializeOptions } from "next-mdx-remote/dist/types";

type SerializeSource = string;
type SerializeResult = MDXRemoteSerializeResult;

export type Serializer = (
  source: SerializeSource,
  options?: SerializeOptions,
) => Promise<SerializeResult>;
