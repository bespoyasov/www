import { CompareFunction, byDateDescending } from "@shared/sort";
import { Metadata } from "@domain/metadata";

export type Settings = {
  sorter?: CompareFunction<Metadata>;
};

export const settings: Settings = {
  sorter: byDateDescending,
};
