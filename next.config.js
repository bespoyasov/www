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
  },
});

module.exports = withOffline(
  withMDX({
    pageExtensions: ["tsx"],
    trailingSlash: true,
  }),
);
