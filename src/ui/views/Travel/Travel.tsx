import Head from "next/head";

import { SummaryCard } from "@components/SummaryCard";
import { Description } from "@components/Description";
import { Trips } from "@components/Trips";

import type { TravelProps } from "./types";
import { translated } from "@translation";

export const Travel = ({ posts }: TravelProps) => {
  return (
    <main>
      <Head>
        <title>{translated.travel.title}</title>
        <Description>{translated.travel.description}</Description>
        <SummaryCard />
      </Head>

      <h1>{translated.travel.title}</h1>
      <p>{translated.travel.description}</p>

      <Trips posts={posts} />
    </main>
  );
};
