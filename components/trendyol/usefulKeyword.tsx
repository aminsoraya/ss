import { UsefulKeyword } from "@/types/trendyol";
import Link from "next/link";
import React, { Fragment } from "react";

interface IProps {
  data: UsefulKeyword[];
}
export default function UsefulKeywordComponent({ data }: IProps) {
  return (
    <Fragment>
      <h1>کلید واژه های پرکاربرد</h1>
      <div className="w-full  flex flex-wrap gap-3 my-5">
        {data.map((item, index) => {
          return (
            <Link
              href={item.link}
              key={index}
              className="px-5 py-3 hover:text-orange-500 hover:border-orange-500  delay-75 md:text-xs text-[10px] border rounded-2xl text-gray-700"
            >
              {item.text}
            </Link>
          );
        })}
      </div>
    </Fragment>
  );
}
