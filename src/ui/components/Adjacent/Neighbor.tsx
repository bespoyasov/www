import Link from "next/link";
import type { Metadata } from "@core/metadata";

import { classes } from "@utils/classes";
import { VisuallyHidden } from "@components/VisuallyHidden";
import { translated } from "@translation";
import styles from "./Neighbor.module.css";

type NeighborKind = "prev" | "next";
type NeighborProps = {
  describes: Metadata;
  is: NeighborKind;
};

export const Neighbor = ({ is: kind, describes: entity }: NeighborProps) => {
  const className = classes("text-color", styles[kind]);
  const prefix = translated.adjacent[kind];

  return (
    <Link href={entity.slug} className={className}>
      <VisuallyHidden>{prefix}: </VisuallyHidden>
      {entity.title}
    </Link>
  );
};
