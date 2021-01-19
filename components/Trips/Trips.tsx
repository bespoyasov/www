import React from "react";
import { Metadata } from "@domain/metadata";
import { Trip } from "@components/Trip";
import styles from "./Trips.module.css";

type TripsProps = {
  posts: Metadata[];
};

export const Trips = ({ posts }: TripsProps) => {
  return (
    <main className={styles.trips}>
      <h1>Мир</h1>
      <p>Заметки из поездок по миру.</p>

      <ul className="reset">
        {posts.map((post) => (
          <li key={post.slug}>
            <Trip place={post} />
          </li>
        ))}
      </ul>
    </main>
  );
};
