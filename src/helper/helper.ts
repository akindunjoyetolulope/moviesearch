import dayjs from "dayjs";

/**
 * Format  string to a `{MMM} {dd}, {yyyy}` format
 * @param dateStr
 * @param format (optional defaults to MMM DD, YYYY)
 */
export function formatDateStr(dateStr: string | number, format?: string) {
  return dayjs(dayjs(dateStr)).format(format || "MMM DD, YYYY");
}
