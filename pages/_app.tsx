import React from "react";

import "../shared/typography.css";
import "../shared/palette.css";
import "../shared/grid.css";

import "../shared/theme.css";
import "../shared/global.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
