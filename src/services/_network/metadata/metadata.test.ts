import type { Dependencies } from "@_network/dependencies";

import { castTo } from "@utils/castTo";
import { createFetchMetadataFactory } from "./metadata";

const testEntries = ["file1", "file2", "file3"];
const testMetadata = {
  file1: { datetime: "2020-08-28T12:00:00" },
  file2: { datetime: "2020-08-28T12:00:01" },
  file3: { datetime: "2020-08-28T11:59:59" },
};

const query = jest.fn(() => testEntries);
const parse = jest.fn((file) => ({ data: testMetadata[file] }));

const dependencies = castTo<Dependencies>({ parse });
const factory = createFetchMetadataFactory(dependencies);

describe("when received a request", () => {
  const sut = factory(query);
  const result = sut();

  it("should run a given query", () => {
    expect(query).toHaveBeenCalled();
  });

  it("should parse each entry returned by the query", () => {
    expect(parse).toHaveBeenCalledTimes(testEntries.length);
    expect(parse).toHaveBeenLastCalledWith(testEntries.at(-1));
  });

  it("should return a sorted list of metadata entries", () => {
    const { file1: middle, file2: earliest, file3: oldest } = testMetadata;
    const expected = [earliest, middle, oldest];

    expect(result).toEqual(expected);
  });
});
