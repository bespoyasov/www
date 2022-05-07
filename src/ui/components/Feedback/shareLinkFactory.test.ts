import { metadata } from "@testing/stubs";
import { createLinkFactory } from "./shareLinkFactory";

const testTemplate = "https://example.site/?url={URL}&text={TITLE}";
const testSlug = "/test/page";

describe("when called a factory creator", () => {
  it("should return a function", () => {
    const createLink = createLinkFactory(testTemplate);
    expect(typeof createLink).toEqual("function");
  });
});

describe("when given post metadata to a link factory", () => {
  const createLink = createLinkFactory(testTemplate);
  const result = createLink({ ...metadata, slug: testSlug });

  it("should replace the {URL} slot with a given slug's absolute URL", () => {
    expect(result).toContain(`?url=https://bespoyasov.ru${testSlug}`);
  });

  it("should replace the {TITLE} slot with a post title", () => {
    expect(result).toContain(`&text=${metadata.title}`);
  });
});
