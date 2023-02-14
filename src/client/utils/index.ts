import format from "date-fns/format";
import { v4 } from "uuid";

export const formatDate = (date: Date = new Date()): string | undefined => {
  return format(date, "yyyy-MM-dd");
};

export const generateUUID = (): string => {
  return v4();
};
