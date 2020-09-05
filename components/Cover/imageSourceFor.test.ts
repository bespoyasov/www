import { imageSourceFor } from "./imageSourceFor";
import { metadata } from "@shared/stubs";

describe("components > Cover > imageSourceFor", () => {
  it("should compose a correct URL for an image with a given extension", () => {
    const entity = { ...metadata, slug: "/test" };
    expect(imageSourceFor(entity, "jpg")).toEqual("/img/test/cover.jpg");
  });
});
