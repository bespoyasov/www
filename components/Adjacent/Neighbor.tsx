import { classes } from "@shared/classes";
import { Metadata } from "@domain/metadata";
import Link from "next/link";
import styles from "./Neighbor.module.css";

type NeighborKind = "prev" | "next";
type NeighborProps = {
  describes: Metadata;
  is: NeighborKind;
};

export const Neighbor = ({ is: kind, describes: entity }: NeighborProps) => {
  const className = classes("text-color", styles[kind]);

  return (
    <Link href={entity.slug}>
      <a className={className}>{entity.title}</a>
    </Link>
  );
};
