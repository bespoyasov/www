import React from "react";
import Link from "next/link";
import { Tag as TagEnum, TagKind } from "@domain/tags";

type TagLinkProps = {
  tag: TagKind;
};

export const TagLink: React.FC<TagLinkProps> = ({ tag }) => {
  const id = tag.toLowerCase();
  const value = TagEnum[tag];

  return (
    <Link href="/tag/[id]" as={`/tag/${id}`}>
      <a className="text-color">{value}</a>
    </Link>
  );
};
