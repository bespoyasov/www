import { TagKind } from "@domain/tags";
import { byTagValue, CompareResult } from ".";

describe("when given a list of tag keys", () => {
  it("should sort the list by tags values in the ascending order", () => {
    const a: TagKind = "dev";
    const b: TagKind = "butthurt";
    expect(byTagValue(a, b)).toEqual(CompareResult.BThenA);

    const c: TagKind = "dev";
    const d: TagKind = "opinion";
    expect(byTagValue(c, d)).toEqual(CompareResult.AThenB);
  });
});
