import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Metadata } from "@domain/metadata";

type ItemProps = {
  is: Metadata;
};

export const Neighbor: React.FC<ItemProps> = ({ is: entity }) => {
  const { pathname } = useRouter();

  return (
    <Link href={pathname} as={entity.slug}>
      <a>{entity.title}</a>
    </Link>
  );
};
