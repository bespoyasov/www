import { withTag } from "./withTag";
import { generate } from "@utils/stubs";

const containsDevTag = withTag("dev");

const entityWithDevTag = generate({ tags: ["dev"] });
const entityWithoutDevTag = generate({ tags: ["design"] });
const entityWithoutAnyTags = generate();

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
