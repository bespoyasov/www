import { byDate } from ".";
import { AnyObject } from "@shared/types";
import { generate, metadata, oneDayAfter } from "@shared/stubs";

describe("shared > sort > byDate", () => {
  it("should return a compare result by `datetime` field, ascending", () => {
    const earlier = metadata;
    const later = generate({ datetime: oneDayAfter });

    expect(byDate(earlier, later)).toEqual(-1);
    expect(byDate(later, earlier)).toEqual(1);
  });

  it("should throw if there is no `datetime` field in list objects", () => {
    const record: AnyObject = {};
    const call = () => byDate(record, record);
    expect(call).toThrowErrorMatchingInlineSnapshot(`"Failed to sort by missing datetime field."`);
  });
});
