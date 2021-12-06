import Link from "next/link";
import { Metadata } from "@domain/metadata";
import { Cover } from "@components/Cover";
import styles from "./Trip.module.css";

type TripProps = {
  place: Metadata;
};

export const Trip = ({ place }: TripProps) => {
  const { title, description, slug } = place;

  return (
    <article className={styles.trip}>
      <Link href={slug}>
        <a className="text-color">
          <Cover for={place} withExtension="jpg" />
          <h2>{title}</h2>
        </a>
      </Link>
      <p>{description}</p>
    </article>
  );
};
