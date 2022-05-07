import type { TagKind } from "@core/tags";
import type { Metadata } from "@core/metadata";

import { TagLink } from "@components/TagLink";
import { List } from "../List";

type TaggedProps = {
  with: TagKind;
  from: List<Metadata>;
};

export const Tagged = ({ with: tag, from: notes }: TaggedProps) => {
  const notesCount = 3;
  const perTag = notes.filter(({ tags }) => tags.includes(tag)).slice(0, notesCount);

  return (
    <>
      <h3>
        <TagLink tag={tag} />
      </h3>
      <List notes={perTag} />
    </>
  );
};
