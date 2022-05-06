import Link from "next/link";
import { classes } from "@utils/classes";
import { Metadata } from "@domain/metadata";
import { VisuallyHidden } from "@components/VisuallyHidden";
import { OrdinalPrefix } from "./const";
import styles from "./Neighbor.module.css";

type NeighborKind = "prev" | "next";
type NeighborProps = {
  describes: Metadata;
  is: NeighborKind;
};

export const Neighbor = ({ is: kind, describes: entity }: NeighborProps) => {
  const className = classes("text-color", styles[kind]);
  const prefix = OrdinalPrefix[kind];

  return (
    <Link href={entity.slug}>
      <a className={className}>
        <VisuallyHidden>{prefix}: </VisuallyHidden>
        {entity.title}
      </a>
    </Link>
  );
};
