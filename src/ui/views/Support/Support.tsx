import Head from "next/head";

import { SupportOptions } from "@components/SupportOptions";
import { Description } from "@components/Description";
import { SummaryCard } from "@components/SummaryCard";
import { translated } from "@translation";

import styles from "./Support.module.css";

export const SupportMe = () => {
  return (
    <main className={styles.support}>
      <Head>
        <title>{translated.supportPage.title}</title>
        <Description>{translated.supportPage.description}</Description>
        <SummaryCard />
      </Head>

      <h1>{translated.supportPage.title}</h1>
      <p>{translated.supportPage.introduction}</p>
      <p>{translated.supportPage.experience}</p>
      <p>{translated.supportPage.motivation}</p>
      <p>{translated.supportPage.feedback}</p>

      <SupportOptions />
    </main>
  );
};
