import { withTag } from "./withTag";
import { generate } from "@shared/stubs";

describe("shared > filter > withTag", () => {
  const containsDevTag = withTag("dev");

  it("should return a function", () => {
    expect(typeof containsDevTag).toEqual("function");
  });

  it("should return true if a given entity's tags list contains a given tag", () => {
    const entityWithDevTag = generate({ tags: ["dev"] });
    expect(containsDevTag(entityWithDevTag)).toEqual(true);
  });

  it("should return false if a given entity's tags list is empty", () => {
    const entityWithoutDevTag = generate();
    expect(containsDevTag(entityWithoutDevTag)).toEqual(false);
  });

  it("should return false if a given entity's tags list doesn't contain a given tag", () => {
    const entityWithoutDevTag = generate({ tags: ["design"] });
    expect(containsDevTag(entityWithoutDevTag)).toEqual(false);
  });
});
