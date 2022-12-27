import * as typography from "@mavrin/remark-typograf";
import unwrapImages from "remark-unwrap-images";
import githubFlavor from "remark-gfm";

import headingIds from "rehype-slug";
import headingAnchors from "rehype-autolink-headings";
import syntaxHighlight from "rehype-highlight";
import fsharp from "highlight.js/lib/languages/fsharp";

export const serializationConfig = {
  development: false,
  remarkPlugins: [
    githubFlavor,
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
    headingIds,
    [
      headingAnchors,
      {
        behavior: "append",
        content: [],
        properties: {
          className: "anchor",
        },
      },
    ],
    [
      syntaxHighlight,
      {
        languages: { fsharp },
      },
    ],
  ],
};
