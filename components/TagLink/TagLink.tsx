import React from "react";
import Link from "next/link";
import { TagKind, valueOf } from "@domain/tags";
import { isStatic } from "./isStatic";

type TagLinkProps = {
  tag: TagKind;
};

export const TagLink: React.FC<TagLinkProps> = ({ tag }) => {
  const value = valueOf(tag);
  const realPath = `/tag/${tag}`;
  const pathTemplate = "/tag/[id]";
  const path = isStatic(tag) ? realPath : pathTemplate;

  return (
    <Link href={path} as={realPath}>
      <a className="text-color">{value}</a>
    </Link>
  );
};
