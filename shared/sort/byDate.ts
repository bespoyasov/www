import { UnixTimeStamp, Comparable } from "@shared/types";
import { Metadata } from "@domain/metadata";
import { sortWith, SortDirection } from "./sortWith";

function extractComparableDate({ datetime }: Metadata): Comparable<UnixTimeStamp> {
  return Date.parse(datetime);
}

export const byDate = sortWith(extractComparableDate);
export const byDateDescending = sortWith(extractComparableDate, SortDirection.Descending);
