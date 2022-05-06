type ProgrammingLanguageExtension = "js" | "ts" | "py" | "fs";
type ProgrammingLanguageName = "JavaScript" | "TypeScript" | "Python" | "F#";

export type LanguageKind = ProgrammingLanguageExtension;
export type LanguageName = ProgrammingLanguageName;
export type LanguageCollection = Dict<LanguageKind, LanguageName>;

export type CodeSampleLanguage = LanguageKind;
export type CodeSampleHeadline = LanguageName;
