import { TagKind } from "@domain/tags";
import { byTagValue, CompareResult } from ".";

describe("shared > sort > byTagValue", () => {
  it("should sort a list of tag keys by their values, ascending", () => {
    const a: TagKind = "dev";
    const b: TagKind = "butthurt";
    expect(byTagValue(a, b)).toEqual(CompareResult.BThenA);

    const c: TagKind = "dev";
    const d: TagKind = "opinion";
    expect(byTagValue(c, d)).toEqual(CompareResult.AThenB);
  });
});
