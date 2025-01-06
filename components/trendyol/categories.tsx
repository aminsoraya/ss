import { Category } from "@/types/trendyol";
import Link from "next/link";
import React, { Fragment } from "react";

interface IProps{
  data:Category[]
}
export default function Categories({data}:IProps) {
  return (
    <div className="px-5 w-full py-3 lg:flex  items-center gap-5 justify-between hidden">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-xs text-gray-700 gap-2 cursor-pointer hover:text-orange-500"
        >
          <Link href={item.link}
            className={
              "h-20 w-20 rounded-full  hover:border-orange-500  border-2 flex items-center justify-center "
            }
          >
            <img src={item.image} width={70} height={70} alt="" />
          </Link>
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
}
