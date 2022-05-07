import Head from "next/head";

import { Description } from "@components/Description";
import { AllTags } from "@components/AllTags";
import { translated } from "@translation";

export const Tags = () => {
  return (
    <main>
      <Head>
        <title>{translated.tagsPage.title}</title>
        <Description>{translated.tagsPage.description}</Description>
      </Head>

      <h1>{translated.tagsPage.title}</h1>
      <AllTags />
    </main>
  );
};
