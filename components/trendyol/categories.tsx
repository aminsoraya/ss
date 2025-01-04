import { trendyolCatList } from "@/service/data/static";
import React, { Fragment } from "react";

export default function Categories() {
  return (
    <div className="px-5 w-full py-3 flex  items-center gap-5 justify-between">
      {trendyolCatList.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-xs text-gray-700 gap-2 cursor-pointer"
        >
          <div
            className={
              "h-20 w-20 rounded-full    flex items-center justify-center "
            }
          >
            <img src={item.image} width={70} height={70} alt="" />
          </div>
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
}
