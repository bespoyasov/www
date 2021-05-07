import { contentFor } from "./factory";

const testId = "post-id";
const testSource = "test-source";
const testResult = { compiledSource: "test-result" };

const query = jest.fn(() => testSource);
const serialize = jest.fn(async () => testResult);

beforeEach(() => jest.clearAllMocks());

describe("when received a request", () => {
  it("should call a given query", async () => {
    const request = contentFor(query);

    await request(testId, { serialize });
    expect(query).toHaveBeenCalled();
  });

  it("should serialize the source with a given serializer", async () => {
    const request = contentFor(query);
    const result = await request(testId, { serialize });

    expect(serialize).toHaveBeenCalledWith(testSource);
    expect(result).toEqual(testResult.compiledSource);
  });
});
