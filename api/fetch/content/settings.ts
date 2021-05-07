import * as unwrapImages from "remark-unwrap-images";
import * as typography from "@mavrin/remark-typograf";
import * as syntaxHighlight from "rehype-highlight/light";
import * as syntaxJS from "highlight.js/lib/languages/javascript";
import * as syntaxTS from "highlight.js/lib/languages/typescript";

import { SerializeOptions } from "next-mdx-remote/dist/types";

export const settings: SerializeOptions = {
  mdxOptions: {
    remarkPlugins: [
      unwrapImages,
      [
        typography,
        {
          locale: ["ru"],
          disableRule: ["*"],
          enableRule: ["common/nbsp/*", "ru/nbsp/*"],
        },
      ],
    ],

    rehypePlugins: [
      [
        syntaxHighlight,
        {
          languages: {
            javascript: syntaxJS,
            typescript: syntaxTS,
          },
        },
      ],
    ],
  },
};
