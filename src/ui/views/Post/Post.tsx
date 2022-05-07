import Head from "next/head";

import { Post } from "@components/Post";
import { Adjacent } from "@components/Adjacent";
import { Metadata } from "@components/Metadata";
import { Feedback } from "@components/Feedback";
import { Description } from "@components/Description";
import { SummaryCard } from "@components/SummaryCard";

import type { PostProps } from "./types";

export const PostView = ({ metadata, prevPost, nextPost, contents }: PostProps) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <Description>{metadata.description}</Description>
        <SummaryCard metadata={metadata} />
      </Head>

      <Post content={contents} />
      <Feedback metadata={metadata} />
      <Metadata metadata={metadata} />
      <Adjacent prev={prevPost} next={nextPost} />
    </>
  );
};
