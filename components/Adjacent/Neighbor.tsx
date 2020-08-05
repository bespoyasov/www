import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Metadata } from "@domain/metadata";
import styles from "./Neighbor.module.css";

type ItemProps = {
  describes: Metadata;
  is: "prev" | "next";
};

export const Neighbor: React.FC<ItemProps> = ({ is: kind, describes: entity }) => {
  const { pathname } = useRouter();

  return (
    <Link href={pathname} as={entity.slug}>
      <a className={styles[kind]}>{entity.title}</a>
    </Link>
  );
};
