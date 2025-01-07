import { PopularItem } from "@/types/trendyol";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function CardComponent({
  brand,
  img,
  link,
  price,
  text,fullWidth
}: PopularItem&{fullWidth?:boolean}) {
  return (
    <Link href={link}>
      <Card className={twMerge("w-full",!fullWidth?"min-w-[200px] h-[145px]":null)}>
        <CardContent className="py-2   items-center justify-between p-0 rounded-lg   h-32 grid grid-cols-2 ">
          <div className="w-full h-full px-1 py-1 flex flex-col   relative">
            <span className="text-[10px] w-full whitespace-nowrap">
              {brand}
            </span>
            <span className="text-[10px] text-gray-600">{text}</span>
            <span className="absolute bottom-3 text-xs text-orange-500">
              {price} TL
            </span>
          </div>

          <div className="h-full p-1 ">
            <div className="w-full h-full relative">
              <img src={img} alt="" className="h-full rounded" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
