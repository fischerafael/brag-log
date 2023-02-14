import format from "date-fns/format";

export const formatDate = (date: Date = new Date()): string | undefined => {
  return format(date, "yyyy-MM-dd");
};
