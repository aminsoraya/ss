import { weekDays } from "@/types";

export const getPersianWeekDay = (day: string) => {
  const days = Object.entries(weekDays).map((item) => ({
    text: item[0],
    alias: item[1],
  }));

  return days.find((s) => s.text == day)?.alias;
};

export const formatTime = (time: string) => {
  const splitTime = time.split(" ");

  return splitTime.join(" تا ");
};
