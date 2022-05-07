import { defaultDatetime } from "@testing/stubs";
import { toLocalizedDateString } from "./toLocalizedDateString";

describe("when given a datetime and the EN locale", () => {
  it("should localize the given datetime to the English language", () =>
    expect(toLocalizedDateString(defaultDatetime, "en")).toEqual("08/04/2020"));
});

describe("when given a datetime and the RU locale", () => {
  it("should localize the given datetime to the Russian language", () =>
    expect(toLocalizedDateString(defaultDatetime, "ru")).toEqual("04.08.2020"));
});
