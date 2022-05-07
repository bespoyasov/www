import type { Metadata } from "@core/metadata";
import { classes } from "@utils/classes";
import { Trip } from "@components/Trip";
import styles from "./Trips.module.css";

type TripsProps = {
  posts: List<Metadata>;
};

export const Trips = ({ posts }: TripsProps) => {
  return (
    <ul className={classes("reset", styles.trips)}>
      {posts.map((post) => (
        <li key={post.slug}>
          <Trip place={post} />
        </li>
      ))}
    </ul>
  );
};
