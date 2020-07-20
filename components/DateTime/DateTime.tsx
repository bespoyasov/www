import React from "react";
import { DateTimeIsoString } from "@shared/types";
import { toLocalizedDateString } from "./toLocalizedDateString";

type Props = {
  datetime: DateTimeIsoString;
};

export const DateTime: React.FC<Props> = ({ datetime }) => {
  return <time dateTime={datetime}>{toLocalizedDateString(datetime)}</time>;
};
