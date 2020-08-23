import { AnyObject } from "@shared/types";
import { generate, metadata, oneDayAfter } from "@shared/stubs";
import { byDate, CompareResult, byDateDescending } from ".";

describe("shared > sort > byDate", () => {
  it("should return a compare result by `datetime` field, ascending", () => {
    const earlier = metadata;
    const later = generate({ datetime: oneDayAfter });

    expect(byDate(earlier, later)).toEqual(CompareResult.AThenB);
    expect(byDate(later, earlier)).toEqual(CompareResult.BThenA);
  });

  it("should throw if there is no `datetime` field in list objects", () => {
    const record: AnyObject = {};
    const call = () => byDate(record, record);
    expect(call).toThrowErrorMatchingInlineSnapshot(`"Failed to sort by missing datetime field."`);
  });
});

describe("shared > sort > byDateDescending", () => {
  it("should return a compare result by `datetime` field, descending", () => {
    const earlier = metadata;
    const later = generate({ datetime: oneDayAfter });

    expect(byDateDescending(earlier, later)).toEqual(CompareResult.BThenA);
    expect(byDateDescending(later, earlier)).toEqual(CompareResult.AThenB);
  });
});
