import Head from "next/head";

import { VisuallyHidden } from "@components/VisuallyHidden";
import { Description } from "@components/Description";
import { TalkList } from "@components/TalkList";
import { translated } from "@translation";

import type { TalksProps } from "./types";

export const Talks = ({ talks }: TalksProps) => {
  const { title, description, heading, latest } = translated.talksPage;

  return (
    <>
      <Head>
        <title>{title}</title>
        <Description>{description}</Description>
      </Head>

      <main>
        <h1>{heading}</h1>
        <p>{description}</p>

        <VisuallyHidden as="h2">{latest}</VisuallyHidden>
        <TalkList talks={talks} />
      </main>
    </>
  );
};
