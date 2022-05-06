import type { CodeSamplesLanguage } from "./types";
import { ProgrammingLanguageName } from "./const";

export function nameOf(key: CodeSamplesLanguage): ProgrammingLanguageName {
  return ProgrammingLanguageName[key];
}
