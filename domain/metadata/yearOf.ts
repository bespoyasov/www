import { Metadata } from "./types";

export function yearOf({ datetime }: Metadata): FullYear {
  return new Date(datetime).getFullYear();
}
