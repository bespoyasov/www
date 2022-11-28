import Link from "next/link";

import type { Metadata } from "@core/metadata";
import { Cover } from "@components/Cover";
import styles from "./Trip.module.css";

type TripProps = {
  place: Metadata;
};

export const Trip = ({ place }: TripProps) => {
  const { title, description, slug } = place;

  return (
    <article className={styles.trip}>
      <Link href={slug} className="text-color">
        <Cover for={place} />
        <h2>{title}</h2>
      </Link>
      <p>{description}</p>
    </article>
  );
};
