/* eslint-disable no-undef, @typescript-eslint/no-var-requires */
const withOffline = require("next-offline");
const withMDX = require("@next/mdx")({
  options: {
    remarkPlugins: [
      require("remark-unwrap-images"),
      [
        require("@mavrin/remark-typograf"),
        {
          locale: ["ru"],
          disableRule: ["*"],
          enableRule: ["common/nbsp/*", "ru/nbsp/*"],
        },
      ],
    ],

    rehypePlugins: [
      [
        require("rehype-highlight/light"),
        {
          languages: {
            javascript: require("highlight.js/lib/languages/javascript"),
            typescript: require("highlight.js/lib/languages/typescript"),
          },
        },
      ],
    ],
  },
});

module.exports = withOffline(
  withMDX({
    pageExtensions: ["tsx"],
    trailingSlash: true,
  }),
);
