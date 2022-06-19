import type { Dependencies } from "./dependencies";

import parse from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

import { serializationConfig } from "@configs/serialization";
import { castTo } from "@utils/castTo";

const settings = {
  serialize: {
    mdxOptions: castTo(serializationConfig),
  },
};

export const dependencies: Dependencies = {
  serialize,
  parse,
  settings,
};
