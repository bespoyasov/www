import { valueOf as comparableTagValue } from "@core/tags";
import { sorterFor } from "./factory";

export const byTagValue = sorterFor(comparableTagValue);
