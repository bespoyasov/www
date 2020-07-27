import React from "react";
import { DateTimeIsoString } from "@shared/types";
import { toLocalizedDateString } from "./toLocalizedDateString";

type DateTimeProps = {
  datetime: DateTimeIsoString;
};

export const DateTime: React.FC<DateTimeProps> = ({ datetime }) => {
  return <time dateTime={datetime}>{toLocalizedDateString(datetime)}</time>;
};
