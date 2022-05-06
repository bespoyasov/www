import { absoluteUrlFor } from ".";

describe("when given a url slug", () => {
  it("should prepend the site url to the given slug", () => {
    expect(absoluteUrlFor("/hello-world")).toEqual("https://bespoyasov.ru/hello-world");
  });
});
