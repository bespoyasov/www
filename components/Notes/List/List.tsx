import React from "react";
import Link from "next/link";
import { Metadata } from "@domain/metadata";

type ListProps = {
  notes: Metadata[];
};

export const List: React.FC<ListProps> = ({ notes }) => {
  return (
    <ul className="reset">
      {notes.map(({ slug, title }) => {
        return (
          <li key={slug}>
            <Link href="/blog/[id]" as={slug}>
              <a>{title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
