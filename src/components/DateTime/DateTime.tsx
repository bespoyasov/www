import { toLocalizedDateString } from "./toLocalizedDateString";

type DateTimeProps = {
  datetime: DateTimeIsoString;
};

export const DateTime = ({ datetime }: DateTimeProps) => {
  return <time dateTime={datetime}>{toLocalizedDateString(datetime)}</time>;
};
