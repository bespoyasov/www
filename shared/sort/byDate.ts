import { UnixTimeStamp, Comparable } from "@shared/types";
import { Metadata } from "@domain/metadata";
import { sortWith, SortDirection } from "./sortWith";

function extractComparableDate({ datetime }: Metadata): Comparable<UnixTimeStamp> {
  if (!datetime) throw new Error("Failed to sort by missing datetime field.");
  return Date.parse(datetime);
}

export const byDate = sortWith(extractComparableDate);
export const byDateDescending = sortWith(extractComparableDate, SortDirection.Descending);
