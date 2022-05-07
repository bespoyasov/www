import Head from "next/head";

import { About } from "@components/About";
import { Description } from "@components/Description";
import { SummaryCard } from "@components/SummaryCard";
import { translated } from "@translation";

export const Main = () => (
  <>
    <Head>
      <title>{translated.mainPage.title}</title>
      <Description>{translated.mainPage.description}</Description>
      <SummaryCard />
    </Head>
    <About />
  </>
);
