import React from "react";
import { Metadata } from "@domain/metadata";

type TripsProps = {
  posts: Metadata[];
};

export const Trips: React.FC<TripsProps> = ({ posts }) => {
  return (
    <main>
      <h1>Мир</h1>
      <p>Заметки из поездок по миру.</p>

      <ul className="reset">
        {posts.map((post) => (
          <li key={post.slug}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
};
