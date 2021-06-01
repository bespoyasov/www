import { TagKind } from "@domain/tags";
import { Metadata } from "@domain/metadata";
import { TagLink } from "@components/TagLink";
import { List } from "@components/Notes/List";

type TaggedProps = {
  with: TagKind;
  from: Metadata[];
};

export const Tagged = ({ with: tag, from: notes }: TaggedProps) => {
  const notesCount = 3;
  const forTag = notes.filter(({ tags }) => tags.includes(tag)).slice(0, notesCount);

  return (
    <>
      <h3>
        <TagLink tag={tag} />
      </h3>
      <List notes={forTag} />
    </>
  );
};
