import { absoluteUrlFor } from "./absoluteUrl";

describe("components > RssEntry > absoluteUrlFor", () => {
  it("should prepend site url to a given slug", () => {
    expect(absoluteUrlFor("/hello-world")).toEqual("https://bespoyasov.ru/hello-world");
  });
});
