import Head from "next/head";

import { Stretch } from "@components/Stretch";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { Center } from "@components/Center";

import "@shared/styles/fonts.css";
import "@shared/styles/typography.css";
import "@shared/styles/palette.css";
import "@shared/styles/sizes.css";
import "@shared/styles/grid.css";

import "@shared/styles/animation.css";
import "@shared/styles/modifiers.css";

import "@shared/styles/theme.css";
import "@shared/styles/global.css";
import "@shared/styles/rhythm.css";

import "@shared/styles/highlight.css";
import "@shared/styles/anchors.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Center>
      <Stretch>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <div className="content">
          <Header />
          <Component {...pageProps} />
        </div>

        <Footer />
      </Stretch>
    </Center>
  );
}
