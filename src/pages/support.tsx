import Head from "next/head";

import { Description } from "@components/Description";
import { SummaryCard } from "@components/SummaryCard";
import { Support } from "@components/Support";

const SupportMe = () => {
  return (
    <main>
      <Head>
        <title>Сказать спасибо</title>
        <Description>Как поддержать меня и мой блог.</Description>
        <SummaryCard />
      </Head>

      <Support />
    </main>
  );
};

export default SupportMe;
