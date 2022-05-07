import { groupByYear } from "./groupByYear";
import { metadata, metadataWith, yearBefore } from "@testing/stubs";

describe("when given a list of metadata pieces of different years", () => {
  const oldRecord = metadataWith({ datetime: yearBefore });
  const withDifferentYears = [metadata, oldRecord];

  it("should split them into groups of a common year", () => {
    const result = groupByYear(withDifferentYears);
    expect(result).toEqual([
      { year: 2020, notes: [metadata] },
      { year: 2019, notes: [oldRecord] },
    ]);
  });
});

describe("when given a list of metadata pieces of the same year", () => {
  const withEqualYears = Array(3).fill(metadata);
  const expected = [{ year: 2020, notes: withEqualYears }];

  it("should place them in a single group with a given year", () => {
    const result = groupByYear(withEqualYears);
    expect(result).toEqual(expected);
  });
});

describe("when given an empty list", () => {
  it("should return an empty list", () => {
    expect(groupByYear([])).toEqual([]);
  });
});
