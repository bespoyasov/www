import Head from "next/head";
import { GetStaticProps } from "next";

import { SummaryCard } from "@components/SummaryCard";
import { Description } from "@components/Description";
import { Trips } from "@components/Trips";

import { Metadata } from "@domain/metadata";
import { withTravelTag } from "@utils/filter";
import { blogPostsMetadata } from "@network/fetch";

type TravelProps = {
  posts: Metadata[];
};

export const getStaticProps: GetStaticProps<TravelProps> = () => {
  const allPosts = blogPostsMetadata();
  const travelPosts = allPosts.filter(withTravelTag);

  return {
    props: {
      posts: travelPosts,
    },
  };
};

const Travel = ({ posts }: TravelProps) => {
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

export default Travel;
