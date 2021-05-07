import { contentFor } from ".";
import { SerializedPost } from "./types";
import { assureType } from "@shared/assureType";

const testId = "post-id";
const testSource = "test-source";
const testResult = "test-result";

const query = jest.fn(() => testSource);
const serialize = jest.fn(async () => assureType<SerializedPost>(testResult));

beforeEach(() => jest.clearAllMocks());

describe("when received a request", () => {
  it("should call a given query", async () => {
    const request = contentFor(query);

    await request(testId, { serialize });
    expect(query).toHaveBeenCalled();
  });

  it("should call the source serializer", async () => {
    const request = contentFor(query);
    const result = await request(testId, { serialize });

    expect(serialize).toHaveBeenCalledWith(testSource);
    expect(result).toEqual(testResult);
  });
});
