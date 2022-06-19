import type { Parse, Serialize, Settings } from "./adapters";

export type Dependencies = {
  settings: Settings;
  serialize: Serialize;
  parse: Parse;
};
