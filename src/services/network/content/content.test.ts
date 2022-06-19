import type { Dependencies } from "../dependencies";

import { castTo } from "@utils/castTo";
import { createFetchContentFactory } from "./content";

const postId = "test-post-id";
const fileSource = "test-source";
const parsedSource = { content: "test-parsed-source" };
const serializedSource = { compiledSource: "test-expected-result" };

const settings = { serialize: "test-serializer-settings" };
const serialize = jest.fn(() => serializedSource);
const parse = jest.fn(() => parsedSource);
const query = jest.fn(() => fileSource);

const dependencies = castTo<Dependencies>({ settings, serialize, parse });
const factory = createFetchContentFactory(dependencies);
const sut = factory(query);

describe("when received a request", () => {
  it("should run a given query", async () => {
    await sut(postId);
    expect(query).toHaveBeenCalledWith(postId);
  });

  it("should parse the returned content using a given parser", async () => {
    await sut(postId);
    expect(parse).toHaveBeenCalledWith(fileSource);
  });

  it("should serialize the parsed content using a given serializer", async () => {
    const result = await sut(postId);

    expect(serialize).toHaveBeenCalledWith(parsedSource.content, settings.serialize);
    expect(result).toEqual(serializedSource.compiledSource);
  });
});
