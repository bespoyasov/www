import { onMainPage } from ".";
import { UrlSlug } from "@shared/types";

describe("shared > onMainPage", () => {
  const mainPageUrl: UrlSlug = "/";
  const otherPages: UrlSlug[] = ["", "//", "/42", "/some-other-page"];

  it("should return true if a given path equals to `/`", () =>
    expect(onMainPage(mainPageUrl)).toEqual(true));

  it("should return false if a given path is not equal to `/`", () => {
    otherPages.forEach((pageUrl) => expect(onMainPage(pageUrl)).toEqual(false));
  });
});
