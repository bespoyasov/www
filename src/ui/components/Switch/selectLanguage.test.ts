import type { CodeSampleLanguage } from "@core/code";
import { selectLanguage } from "./selectLanguage";

describe("when the preferred language is not in the available languages list", () => {
  it("should return the first available language", () => {
    expect(selectLanguage(["js", "ts"], "py")).toEqual("js");
    expect(selectLanguage(["ts", "js"], "py")).toEqual("ts");
  });
});

describe("when the preferred language is in the available languages list", () => {
  it("should return the current preferred language", () => {
    const languages: List<CodeSampleLanguage> = ["js", "ts", "py", "fs"];

    languages.forEach((language) => {
      expect(selectLanguage(languages, language)).toEqual(language);
    });
  });
});
