import { dependencies } from "@persistence/composition";
import { QueryKind } from "@persistence/types";
import { createPathBuilder } from "./directory";

describe("when specified a locale", () => {
  const cases: List<Locale> = ["en", "ru"];
  const each = it.each(cases);

  each("should return a path to the content for that locale (%p)", (locale) => {
    const sut = createPathBuilder({ ...dependencies, locale });
    const expectedPath = `storage/${locale}/notes`;

    expect(sut("notes").endsWith(expectedPath)).toBe(true);
  });
});

describe("when given a query", () => {
  const cases: List<QueryKind> = ["notes", "projects", "talks"];
  const each = it.each(cases);

  each("should return a path to the content for that query (%p)", (query) => {
    const sut = createPathBuilder(dependencies);
    const expectedPath = `storage/en/${query}`;

    expect(sut(query).endsWith(expectedPath)).toBe(true);
  });
});
