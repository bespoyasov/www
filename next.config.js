/* eslint-disable no-undef, @typescript-eslint/no-var-requires */
const withOffline = require("next-offline");

module.exports = withOffline({
  pageExtensions: ["tsx"],
  trailingSlash: true,
  experimental: { esmExternals: true },
  env: { LOCALE: process.env.locale },
  distDir: `.next-${process.env.locale}`,
});
