import React from "react";

import "@shared/styles/typography.css";
import "@shared/styles/palette.css";
import "@shared/styles/sizes.css";
import "@shared/styles/grid.css";

import "@shared/styles/theme.css";
import "@shared/styles/global.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
