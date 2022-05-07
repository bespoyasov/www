import { GetStaticProps } from "next";
import { withTravelTag } from "@utils/filter";
import { blogPostsMetadata } from "@network/fetch";

import type { TravelProps } from "@views/Travel";
import { Travel as TravelPage } from "@views/Travel";

export const getStaticProps: GetStaticProps<TravelProps> = () => {
  const allPosts = blogPostsMetadata();
  const travelPosts = allPosts.filter(withTravelTag);

  return {
    props: {
      posts: travelPosts,
    },
  };
};

export default TravelPage;
