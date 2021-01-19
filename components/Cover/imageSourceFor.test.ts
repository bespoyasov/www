import { imageSourceFor } from "./imageSourceFor";
import { metadata } from "@shared/stubs";

describe("when given an image and an extension", () => {
  it("should compose a correct url for that image", () => {
    const entity = { ...metadata, slug: "/test" };
    expect(imageSourceFor(entity, "jpg")).toEqual("/img/test/cover.jpg");
  });
});
