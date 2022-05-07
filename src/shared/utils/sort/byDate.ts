import type { Metadata } from "@core/metadata";
import type { Comparable } from "./types";

import { SortOrder } from "./const";
import { sorterFor } from "./factory";

function comparableDateTime({ datetime }: Metadata): Comparable<UnixTimeStamp> {
  if (!datetime) throw new Error("Failed to sort by missing datetime field.");
  return Date.parse(datetime);
}

export const byDate = sorterFor(comparableDateTime);
export const byDateDescending = sorterFor(comparableDateTime, SortOrder.Descending);
