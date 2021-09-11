import * as typography from "@mavrin/remark-typograf";
import unwrapImages from "remark-unwrap-images";

import headingIds from "rehype-slug";
import headingAnchors from "rehype-autolink-headings";
import syntaxHighlight from "rehype-highlight";

export const serializationConfig = {
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
        subset: false,
      },
    ],
  ],
};
