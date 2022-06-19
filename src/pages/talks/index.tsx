import type { GetStaticProps } from "next";
import type { TalksProps } from "@views/Talks";

import { talksMetadata } from "@_network/metadata";
import { Talks as TalksPage } from "@views/Talks";

export const getStaticProps: GetStaticProps<TalksProps> = () => {
  return {
    props: {
      talks: talksMetadata(),
    },
  };
};

export default TalksPage;
