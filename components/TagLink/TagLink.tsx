import React from "react";
import Link from "next/link";
import { Tag as TagEnum, TagKind } from "@domain/tags";
import { isStatic } from "./isStatic";

type TagLinkProps = {
  tag: TagKind;
};

export const TagLink: React.FC<TagLinkProps> = ({ tag }) => {
  const id = tag.toLowerCase();
  const value = TagEnum[tag];

  const realPath = `/tag/${id}`;
  const pathTemplate = "/tag/[id]";
  const path = isStatic(tag) ? realPath : pathTemplate;

  return (
    <Link href={path} as={realPath}>
      <a className="text-color">{value}</a>
    </Link>
  );
};
