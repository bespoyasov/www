import { assureType } from "@utils/assureType";
import { Dependencies } from "./composition";
import { metadataFor } from "./factory";

const testData = { datetime: "2020-08-28T12:00:00" };
const parserMock = jest.fn(() => ({ data: testData }));
const dependencies = assureType<Dependencies>({ parser: parserMock });

describe("when received a request", () => {
  it("should call a given query", () => {
    const query = jest.fn(() => []);
    const request = metadataFor(query);

    request();
    expect(query).toHaveBeenCalled();
  });

  it("should call the `matter` function on every post and access the `data` field", () => {
    const posts = ["post1", "post2", "post3"];
    const expected = posts.map(() => testData);

    const query = () => posts;
    const request = metadataFor(query);
    const result = request(dependencies);

    expect(parserMock).toHaveBeenCalledTimes(posts.length);
    expect(result).toEqual(expected);
  });

  it("should sort query results with a given compare function", () => {
    const posts = ["post1", "post2", "post3"];
    const query = () => posts;
    const sorter = jest.fn();

    const request = metadataFor(query, { sorter });
    request();

    expect(sorter).toHaveBeenCalledTimes(posts.length - 1);
  });
});
