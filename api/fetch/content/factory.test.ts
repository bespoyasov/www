import { assureType } from "@shared/assureType";
import { Dependencies } from "./composition";
import { contentFor } from "./factory";
import { settings } from "./settings";

const testId = "post-id";
const testFileSource = "test-source";
const testParsedSource = "test-parsed";

const testParseResult = { content: "test-parsed" };
const testSerializeResult = { compiledSource: "test-result" };

const query = jest.fn(() => testFileSource);
const parser = jest.fn(() => testParseResult);
const serialize = jest.fn(async () => testSerializeResult);
const dependencies = assureType<Dependencies>({ serialize, parser });

beforeEach(() => jest.clearAllMocks());

describe("when received a request", () => {
  it("should call a given query", async () => {
    const request = contentFor(query);

    await request(testId, dependencies);
    expect(query).toHaveBeenCalled();
  });

  it("should parse content of a given file", async () => {
    const request = contentFor(query);

    await request(testId, dependencies);
    expect(parser).toHaveBeenCalledWith(testFileSource);
  });

  it("should serialize the source with a given serializer", async () => {
    const request = contentFor(query);
    const result = await request(testId, dependencies);

    expect(serialize).toHaveBeenCalledWith(testParsedSource, settings);
    expect(result).toEqual(testSerializeResult.compiledSource);
  });
});
