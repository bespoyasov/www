import { metadata, metadataWith } from "@testing/stubs";
import { withTag } from "./withTag";

const containsDevTag = withTag("dev");

const entityWithDevTag = metadataWith({ tags: ["dev"] });
const entityWithoutDevTag = metadataWith({ tags: ["design"] });
const entityWithoutAnyTags = metadata;

describe("when called a factory", () => {
  it("should return a function", () => {
    expect(typeof containsDevTag).toEqual("function");
  });
});

describe("when a given entity's tags list contains a given tag", () => {
  it("should return `true`", () => {
    expect(containsDevTag(entityWithDevTag)).toEqual(true);
  });
});

describe("when a given entity's tags list is empty", () => {
  it("should return `false`", () => {
    expect(containsDevTag(entityWithoutAnyTags)).toEqual(false);
  });
});

describe("when a given entity's tags list doesn't contain a given tag", () => {
  it("should return `false`", () => {
    expect(containsDevTag(entityWithoutDevTag)).toEqual(false);
  });
});
