import { SerializeOptions } from "next-mdx-remote/dist/types";
import { serializationConfig } from "@configs/serialization";
import { assureType } from "@utils/assureType";

export const settings: SerializeOptions = {
  mdxOptions: assureType(serializationConfig),
};
