import React from "react";
import Link from "next/link";
import { Metadata } from "@domain/metadata";

type ItemProps = {
  is: Metadata;
};

export const Neighbor: React.FC<ItemProps> = ({ is: entity }) => {
  return (
    <Link href={entity.slug} as={entity.slug}>
      <a>{entity.title}</a>
    </Link>
  );
};
