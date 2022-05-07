import { metadata, metadataWith } from "@testing/stubs";
import { DEFAULT_CARD } from "./const";
import { unwrap } from "./unwrap";

describe("when not given any `metadata`", () => {
  it("should return the default summary card", () => {
    expect(unwrap()).toEqual(DEFAULT_CARD);
  });
});

describe("when given `metadata`", () => {
  it("should return `title` and `description` from it", () => {
    const { title, description } = unwrap(metadata);
    expect(title).toEqual(metadata.title);
    expect(description).toEqual(metadata.description);
  });
});

describe("when given `metadata` without the `cover`", () => {
  it("should return `cover` from the default summary card", () => {
    const { cover } = unwrap(metadata);
    expect(cover).toEqual(DEFAULT_CARD.cover);
  });
});

describe("when given `metadata` with a `cover`", () => {
  it("should return the `cover` from the given `metadata`", () => {
    const testCover = "image.png";
    const { cover } = unwrap(metadataWith({ cover: testCover }));
    expect(cover).toEqual(testCover);
  });
});
