import type { QueryKind } from "@persistence/types";
import { directoryFor } from ".";

describe("when given a query", () => {
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
    const dependencies = { locale };
    const expectedPath = `storage/${locale}/notes`;
    expect(directoryFor(query, dependencies).endsWith(expectedPath)).toBe(true);
  });
});
