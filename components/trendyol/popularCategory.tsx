import React from "react";
import Image from "next/image";
import { PopularCategory } from "@/types/trendyol";
import Link from "next/link";

interface IProps {
  data: PopularCategory[];
}
export default function PopularCategoryComponent({ data }: IProps) {
  return (
    <div className="w-full flex flex-col">
      <span className="py-5">دسته بندی های محبوب </span>
      <div className="w-full   gap-3 grid-flow-col px-3 flex flex-wrap justify-between">
        {data.map((item, index) => (
          <Link
            href={item.link}
            className="relative overflow-hidden rounded "
            key={index}
          >
            <Image
              className="bg-cover"
              alt=""
              src={item.img}
              width={150}
              height={150}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
