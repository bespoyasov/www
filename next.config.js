/* eslint-disable no-undef, @typescript-eslint/no-var-requires */
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
  trailingSlash: true,
});
