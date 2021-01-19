import { Metadata } from "@domain/metadata";
import { RssEntry } from "@components/RssEntry";
import { PostLayout } from "@layouts/Post";

type RssFeedProps = {
  entries: Metadata[];
};

export const RssFeed = ({ entries }: RssFeedProps) => {
  return (
    <PostLayout>
      {entries.map((entry) => (
        <RssEntry entry={entry} key={entry.slug} />
      ))}
    </PostLayout>
  );
};
