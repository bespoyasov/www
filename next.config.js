/* eslint-disable */
const withMDX = require("@next/mdx")({
  options: {
    remarkPlugins: [require("remark-unwrap-images")],
  },
});

module.exports = withMDX({
  pageExtensions: ["tsx", "mdx"],
});
