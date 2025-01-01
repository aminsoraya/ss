import React, { Fragment } from "react";
import { GiRunningShoe } from "react-icons/gi";
import { IoManSharp, IoWoman } from "react-icons/io5";
import {
  MdOutlineElderlyWoman,
  MdOutlineSportsMartialArts,
  MdPrecisionManufacturing,
} from "react-icons/md";
import { twMerge } from "tailwind-merge";

export default function Categories() {
  const catList = [
    {
      icon: GiRunningShoe,
      text: "کفش",
      textColor: "text-amber-500",
      bgColor: "bg-amber-50",
    },
    {
      icon: MdOutlineSportsMartialArts,
      text: "ورزشی",
      textColor: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: IoManSharp,
      text: "مردانه",
      textColor: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: MdOutlineElderlyWoman,
      text: "دخترانه",
      textColor: "text-violet-500",
      bgColor: "bg-violet-50",
    },
    {
      icon: IoWoman,
      text: "زنانه",
      textColor: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: MdPrecisionManufacturing,
      text: "صنعتی",
      textColor: "text-slate-500",
      bgColor: "bg-slate-50",
    },
  ];
  return (
    <div className="px-5 w-full py-3 flex  items-center gap-5 justify-between">
      {catList.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-xs text-gray-700 gap-2 cursor-pointer"
        >
          <div
            className={twMerge(
              "h-20 w-20 rounded-full border  flex items-center justify-center ",
              item.bgColor
            )}
          >
            <item.icon className={twMerge("text-4xl", item.textColor)} />
          </div>
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
}
