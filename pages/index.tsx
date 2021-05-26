import Head from "next/head";
import { About } from "@components/About";
import { Description } from "@components/Description";
import { SummaryCard } from "@components/SummaryCard";

const Main = () => (
  <>
    <Head>
      <title>АБ</title>
      <Description>Иногда работаю, иногда не работаю.</Description>
      <SummaryCard />
    </Head>
    <About />
  </>
);

export default Main;
