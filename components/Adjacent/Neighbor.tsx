import Link from "next/link";
import { Metadata } from "@domain/metadata";
import styles from "./Neighbor.module.css";

type NeighborKind = "prev" | "next";
type NeighborProps = {
  describes: Metadata;
  is: NeighborKind;
};

export const Neighbor = ({ is: kind, describes: entity }: NeighborProps) => {
  const className = styles[kind];

  return (
    <Link href={entity.slug}>
      <a className={className}>{entity.title}</a>
    </Link>
  );
};
