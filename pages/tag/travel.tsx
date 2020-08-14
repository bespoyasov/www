import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import { Description } from "@components/Description";
import { Trips } from "@components/Trips";

import { Metadata } from "@domain/metadata";
import { blogPostsMetadata } from "@api/fetch";

type TravelProps = {
  posts: Metadata[];
};

export const getStaticProps: GetStaticProps<TravelProps> = async () => {
  const allPosts = await blogPostsMetadata();
  const travelPosts = allPosts.filter((post) => post.tags.includes("Travel"));

  return {
    props: {
      posts: travelPosts,
    },
  };
};

const Travel: React.FC<TravelProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Мир</title>
        <Description>Заметки из поездок по миру.</Description>
      </Head>
      <Trips posts={posts} />
    </>
  );
};

export default Travel;
