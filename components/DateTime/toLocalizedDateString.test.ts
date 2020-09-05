import { defaultDatetime } from "@shared/stubs";
import { toLocalizedDateString } from "./toLocalizedDateString";

describe("components > DateTime > toLocalizedDateString", () => {
  it("should localize a given datetime to Russian language", () =>
    expect(toLocalizedDateString(defaultDatetime)).toEqual("4 августа 2020 г."));
});
