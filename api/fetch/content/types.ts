import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { SerializeOptions } from "next-mdx-remote/dist/types";
import { PostContents } from "@domain/post";

export type SerializerOptions = SerializeOptions;
export type SerializedPost = MDXRemoteSerializeResult;

export type Serializer = (
  source: PostContents,
  options?: SerializerOptions,
) => Promise<SerializedPost>;
