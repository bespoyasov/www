import { Fragment } from "react";
import type { Metadata } from "@core/metadata";
import { groupByYear } from "./groupByYear";

type AnthologyProps = {
  notes: Metadata[];
};

export const Anthology = ({ notes }: AnthologyProps) => {
  const groups = groupByYear(notes);

  return (
    <>
      {groups.map(({ year, notes }) => (
        <Fragment key={year}>
          <h3>{year}</h3>
          <Group notes={notes} />
        </Fragment>
      ))}
    </>
  );
};
