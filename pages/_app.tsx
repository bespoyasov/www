import React from "react";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { Center } from "@components/Center";

import "@shared/styles/typography.css";
import "@shared/styles/palette.css";
import "@shared/styles/sizes.css";
import "@shared/styles/grid.css";

import "@shared/styles/animation.css";
import "@shared/styles/theme.css";
import "@shared/styles/global.css";
import "@shared/styles/rhythm.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Center>
      <div className="wrap">
        <Header />
        <Component {...pageProps} />
      </div>
      <Footer />
    </Center>
  );
}
