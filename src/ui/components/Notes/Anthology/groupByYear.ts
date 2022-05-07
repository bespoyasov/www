import type { Metadata } from "@core/metadata";
import { yearOf } from "@core/metadata";
import { last } from "@utils/last";

type Group = {
  year: FullYear;
  notes: List<Metadata>;
};

export function groupByYear(notes: List<Metadata>): List<Group> {
  return notes.reduce((groups, note) => {
    const lastGroup = last(groups);
    const year = yearOf(note);

    if (!lastGroup || year !== lastGroup.year) {
      return [...groups, { year, notes: [note] }];
    }

    lastGroup.notes.push(note);
    return groups;
  }, []);
}
