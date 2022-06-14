import type { QueryKind } from "@persistence/types";

import { defaultDependencies } from "./dependencies";
import { createQueryDirectory as create } from "./factory";

describe("when given a query", () => {
  const directoryFor = create(defaultDependencies);
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
    const directoryFor = create({ ...defaultDependencies, locale });
    const expectedPath = `storage/${locale}/notes`;
    expect(directoryFor(query).endsWith(expectedPath)).toBe(true);
  });
});
