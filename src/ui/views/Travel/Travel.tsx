import Head from "next/head";

import { SummaryCard } from "@components/SummaryCard";
import { Description } from "@components/Description";
import { Trips } from "@components/Trips";

import type { TravelProps } from "./types";

export const Travel = ({ posts }: TravelProps) => {
  return (
    <>
      <Head>
        <title>Мир</title>
        <Description>Заметки из поездок по миру.</Description>
        <SummaryCard />
      </Head>
      <Trips posts={posts} />
    </>
  );
};
