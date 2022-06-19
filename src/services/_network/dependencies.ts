import type { Parse, Serialize, Settings } from "@network/adapters";

export type Dependencies = {
  settings: Settings;
  serialize: Serialize;
  parse: Parse;
};
