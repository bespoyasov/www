import markdown from "remark-mdx";
import { exportsOf, metadataOf } from "@domain/ast";
import { FileContentProcessorMock } from "@shared/mocks";
import { metadataFor } from "./factory";

const mockInstance = new FileContentProcessorMock(`{datetime: "2020-08-28T12:00:00"}`);
jest.mock("remark", () => () => mockInstance);

describe("when received a request", () => {
  it("should call a given query", () => {
    const query = jest.fn(() => []);
    const request = metadataFor(query);

    request();
    expect(query).toHaveBeenCalled();
  });

  it("should apply all the `remark` plugins on each post in the query result", async () => {
    const posts = ["post1", "post2"];
    const plugins = [markdown, exportsOf, metadataOf];

    const query = () => posts;
    const request = metadataFor(query);
    await request();

    const mockCalledTimes = posts.length * plugins.length;
    expect(mockInstance.inspect).toHaveBeenCalledTimes(mockCalledTimes);

    plugins.forEach((plugin, index) => {
      expect(mockInstance.inspect.mock.calls[index][0]).toEqual(plugin);
    });
  });

  it("should sort query results with a given compare function", async () => {
    const posts = ["post1", "post2", "post3"];
    const query = () => posts;
    const sorter = jest.fn();

    const request = metadataFor(query, { sorter });
    await request();

    expect(sorter).toHaveBeenCalledTimes(posts.length - 1);
  });
});
