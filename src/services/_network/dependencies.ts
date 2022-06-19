import type { Parse, Serialize, Settings } from "@_network/adapters";

export type Dependencies = {
  settings: Settings;
  serialize: Serialize;
  parse: Parse;
};
