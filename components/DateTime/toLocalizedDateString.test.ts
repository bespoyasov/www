import { defaultDatetime } from "@shared/stubs";
import { toLocalizedDateString } from "./toLocalizedDateString";

describe("when given a datetime", () => {
  it("should localize the given datetime to Russian language", () =>
    expect(toLocalizedDateString(defaultDatetime)).toEqual("04.08.2020"));
});
