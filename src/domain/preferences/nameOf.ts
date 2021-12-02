import { ProgrammingLanguageName } from "./const";
import { CodeSamplesLanguage } from "./types";

export function nameOf(key: CodeSamplesLanguage): ProgrammingLanguageName {
  return ProgrammingLanguageName[key];
}
