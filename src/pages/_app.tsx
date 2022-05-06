import Head from "next/head";

import { Stretch } from "@components/Stretch";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { Center } from "@components/Center";

import "@styles/fonts.css";
import "@styles/typography.css";
import "@styles/palette.css";
import "@styles/sizes.css";
import "@styles/grid.css";

import "@styles/animation.css";
import "@styles/modifiers.css";

import "@styles/theme.css";
import "@styles/global.css";
import "@styles/rhythm.css";

import "@styles/highlight.css";
import "@styles/anchors.css";

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
