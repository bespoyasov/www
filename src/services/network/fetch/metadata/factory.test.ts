import type { Dependencies } from "@network/composition";
import { castTo } from "@utils/castTo";
import { metadataFor } from "./factory";

const testEntries = ["file1", "file2", "file3"];
const testMetadata = {
  file1: { datetime: "2020-08-28T12:00:00" },
  file2: { datetime: "2020-08-28T12:00:01" },
  file3: { datetime: "2020-08-28T11:59:59" },
};

const parserMock = jest.fn((file) => ({ data: testMetadata[file] }));
const dependencies = castTo<Dependencies>({ parse: parserMock });

const query = jest.fn(() => testEntries);
const request = metadataFor(query);

beforeEach(() => jest.clearAllMocks());
afterAll(() => jest.restoreAllMocks());

describe("when received a request", () => {
  it("should run a given query", () => {
    request(dependencies);
    expect(query).toHaveBeenCalled();
  });

  it("should parse each entry returned by the query", () => {
    request(dependencies);
    expect(parserMock).toHaveBeenCalledTimes(testEntries.length);
    expect(parserMock).toHaveBeenLastCalledWith(testEntries.at(-1));
  });

  it("should return a sorted list of metadata entries", () => {
    const { file1: middle, file2: earliest, file3: oldest } = testMetadata;
    const expected = [earliest, middle, oldest];

    const result = request(dependencies);
    expect(result).toEqual(expected);
  });
});
