import type { Dependencies, Settings } from "@network/composition";
import { castTo } from "@utils/assureType";
import { contentFor } from "./factory";

const testId = "post-id";
const testFileSource = "test-source";
const testParsedSource = "test-parsed";
const expectedResult = "test-result";

const testParseResult = { content: testParsedSource };
const testSerializeResult = { compiledSource: expectedResult };
const testSerializeSettings = { key: "value" };

const query = jest.fn(() => testFileSource);
const parse = jest.fn(() => testParseResult);
const serialize = jest.fn(async () => testSerializeResult);

const dependencies = castTo<Dependencies>({ serialize, parse });
const settings = castTo<Settings>({ serializeSettings: testSerializeSettings });
const request = contentFor(query, settings);

beforeEach(() => jest.clearAllMocks());
afterAll(() => jest.restoreAllMocks());

describe("when received a request", () => {
  it("should run a given query", async () => {
    await request(testId, dependencies);
    expect(query).toHaveBeenCalledWith(testId);
  });

  it("should parse the returned content using a given parser", async () => {
    await request(testId, dependencies);
    expect(parse).toHaveBeenCalledWith(testFileSource);
  });

  it("should serialize the parsed content using a given serializer", async () => {
    const result = await request(testId, dependencies);

    expect(serialize).toHaveBeenCalledWith(testParsedSource, testSerializeSettings);
    expect(result).toEqual(expectedResult);
  });
});
