import { onMainPage } from ".";

const mainPageUrl: UrlSlug = "/";
const otherPages: List<UrlSlug> = ["", "//", "/42", "/some-other-page"];

describe("when given a root URL slug", () => {
  it("should return `true`", () => {
    expect(onMainPage(mainPageUrl)).toEqual(true);
  });
});

describe("when given any other slug", () => {
  const each = it.each<UrlSlug>(otherPages);

  each("should return `false` for %p", (pageUrl) => {
    expect(onMainPage(pageUrl)).toEqual(false);
  });
});
