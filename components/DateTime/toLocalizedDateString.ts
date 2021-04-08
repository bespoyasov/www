export function toLocalizedDateString(datetime: DateTimeIsoString): LocalizedDateString {
  return new Date(datetime).toLocaleString("ru-RU", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
}
