import { TrendyolMain } from "@/types";
import React from "react";
import Image from "next/image";
import { PopularCategory } from "@/types/trendyol";

interface IProps {
  data: PopularCategory[];
}
export default function PopularCategoryComponent({ data }: IProps) {
  return (
    <div className="w-full   gap-3 flex flex-wrap justify-between">
      {data.map((item, index) => (
        <div className="relative overflow-hidden rounded " key={index}>
          <Image
            className="bg-cover"
            alt=""
            src={item.img}
            width={150}
            height={150}
          />
        </div>
      ))}
    </div>
  );
}
