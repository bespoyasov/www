import { CompareFunction, byDateDescending } from "@utils/sort";
import { Metadata } from "@domain/metadata";

export type Settings = {
  sorter?: CompareFunction<Metadata>;
};

export const settings: Settings = {
  sorter: byDateDescending,
};
