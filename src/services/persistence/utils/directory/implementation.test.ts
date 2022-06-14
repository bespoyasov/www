import type { QueryKind } from "@persistence/types";

import { dependencies } from "./dependencies";
import { createQueryDirectory as create } from "./implementation";

describe("when given a query", () => {
  const directoryFor = create(dependencies);
  const cases: List<QueryKind> = ["projects", "notes"];
  const each = it.each(cases);

  each("should return a path to the content for that query (%p)", (query) => {
    const expectedPath = `storage/en/${query}`;
    expect(directoryFor(query).endsWith(expectedPath)).toBe(true);
  });
});

describe("when specified a locale", () => {
  const query: QueryKind = "notes";
  const cases: List<Locale> = ["en", "ru"];
  const each = it.each(cases);

  each("should return a path to the content for that locale (%p)", (locale) => {
    const directoryFor = create({ ...dependencies, locale });
    const expectedPath = `storage/${locale}/notes`;
    expect(directoryFor(query).endsWith(expectedPath)).toBe(true);
  });
});
