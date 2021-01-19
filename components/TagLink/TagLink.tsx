import React from "react";
import Link from "next/link";
import { TagKind, valueOf } from "@domain/tags";

type TagLinkProps = {
  tag: TagKind;
};

export const TagLink = ({ tag }: TagLinkProps) => {
  const value = valueOf(tag);

  return (
    <Link href={`/tag/${tag}`}>
      <a className="text-color">{value}</a>
    </Link>
  );
};
