import type { GetStaticProps } from "next";
import type { TravelProps } from "@views/Travel";

import { withTravelTag } from "@utils/filter";
import { notesMetadata } from "@network/metadata";
import { Travel as TravelPage } from "@views/Travel";

export const getStaticProps: GetStaticProps<TravelProps> = () => {
  const allPosts = notesMetadata();
  const travelPosts = allPosts.filter(withTravelTag);

  return {
    props: {
      posts: travelPosts,
    },
  };
};

export default TravelPage;
