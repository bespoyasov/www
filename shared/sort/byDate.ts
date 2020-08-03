import { UnixTimeStamp } from "@shared/types";
import { Metadata } from "@domain/metadata";
import { sortWith } from "./sortWith";

export const byDate = sortWith(({ datetime }: Metadata): UnixTimeStamp => Date.parse(datetime));
