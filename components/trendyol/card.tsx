"use client";
import { MostPopular } from "@/types/trendyol";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

export default function Card({
  brand,
  finalPrice,
  img,
  name,
  originalPrice,
  reviewCount,
  score,
}: MostPopular) {
  const haveOriginalPrice = parseInt(originalPrice) > 0;

  const concatibleBrand =
    brand?.length! > 10 ? brand.slice(0, 10).concat("...")! : brand;
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow  border border-gray-100 relative  h-[400px] w-full  mt-5">
      <strong className="absolute top-0 bg-gray-100 left-0 z-10 w-24 text-sm justify-center text-gray-700 h-8 flex items-center">
        {concatibleBrand}
      </strong>
      <div className="h-72 px-2 py-2 bg-gray-200 flex items-center relative">
        <div className="w-full relative h-64 ">
          <Image src={img} alt="" fill className="object-cover" />
        </div>
        <div
          dir="ltr"
          className="absolute bottom-0 bg-gray-800 opacity-85 left-0 z-10 w-20  text-[11px] justify-evenly text-gray-100 h-8 flex items-center"
        >
          <span className="flex items-center text-gray-200 font-normal ">
            <FaStar className="text-yellow-500 " />
            {score}
          </span>
          <span className="text-gray-400 text-[10px]"> ({reviewCount})</span>
        </div>
      </div>

      <div className="px-2 py-2 text-xs text-gray-600 leading-5 " dir="rtl">
        <span>{name}</span>
      </div>

      <div
        dir="ltr"
        className="w-full flex items-center gap-2 absolute bottom-1   px-2"
      >
        {haveOriginalPrice && (
          <span dir="ltr" className="line-through text-gray-400 text-sm">
            {originalPrice} TL
          </span>
        )}
        <span
          dir="ltr"
          className={twMerge(
            "text-orange-500 text-xs md:text-sm",
            haveOriginalPrice ? "text-red-500" : null
          )}
        >
          {finalPrice} TL
        </span>
      </div>
    </div>
  );
}
