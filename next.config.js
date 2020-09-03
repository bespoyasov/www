/* eslint-disable */
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
  },
});

module.exports = withMDX({
  pageExtensions: ["tsx"],
  exportTrailingSlash: true,
});
