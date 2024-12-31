import { weekDays } from "@/types";
import { Footer } from "@/types/footer";
import { formatTime, getPersianWeekDay } from "@/utils/common";
import React, { useMemo } from "react";

export default function Contact(
  props: Pick<Footer, "email" | "phone" | "timesWork">
) {
  const { email, phone, timesWork } = props;

  const groupByTime = useMemo(() => {
    const stickDay = Object.values(timesWork).map((item) => {
      const [day] = Object.keys(item);
      const [clock] = Object.values(item);
      return { day, clock };
    });
    return Object.groupBy(stickDay, ({ clock }) => clock);
  }, [timesWork]);

  const demonstrationData = useMemo(() => {
    if (groupByTime) {
      const entries = Object.entries(groupByTime).map((item) => {
        const days = item[1];
        const clock = item.at(0);

        const first = days?.at(0);
        const end = days?.at(days.length - 1);

        if (first?.day != end?.day)
          return `${getPersianWeekDay(first?.day!)} تا ${getPersianWeekDay(
            end?.day!
          )} ${formatTime(clock?.toString()!)}`;
        return `${getPersianWeekDay(first?.day!)}  ${formatTime(
          clock?.toString()!
        )}`;
      });
      return entries;
    }
  }, [groupByTime]);

  return (
    <div className="w-full h-14 gap-3 text-sm bg-gray-300 flex items-center  px-5">
      <div>
        <span>تلفن تماس :</span>
        <a href={`tel:+98${phone}`} className="text-blue-500">
          {phone}
        </a>
      </div>
      <div className="flex items-center gap-3">
        {demonstrationData?.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
      <div>
        <span>ایمیل :</span>
        <a href={`mailto:${email}`} className="text-blue-500">{email}</a>
      </div>
    </div>
  );
}
