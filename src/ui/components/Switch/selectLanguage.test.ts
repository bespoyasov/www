import type { CodeSamplesLanguage } from "@domain/preferences";
import { selectLanguage } from "./selectLanguage";

describe("when the preferred language is not in the available languages list", () => {
  it("should return the first available language", () => {
    expect(selectLanguage(["js", "ts"], "py")).toEqual("js");
    expect(selectLanguage(["ts", "js"], "py")).toEqual("ts");
  });
});

describe("when the preferred language is in the available languages list", () => {
  it("should return the current preferred language", () => {
    const languages: List<CodeSamplesLanguage> = ["js", "ts", "py"];

    languages.forEach((language) => {
      expect(selectLanguage(languages, language)).toEqual(language);
    });
  });
});
