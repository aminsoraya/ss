import { Card } from "@/types/trendyol";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import CardImage from "./CardImage";

export default function CardComponent({
  brand,
  finalPrice,
  img,
  name,
  originalPrice,
  reviewCount,
  score,
  link,
}: Card) {
  const haveOriginalPrice = parseInt(originalPrice) > 0;

  const concatibleBrand =
    brand?.length! > 10 ? brand.slice(0, 10).concat("...")! : brand;

  const nameCut = name.length > 30 ? name.slice(0, 30).concat("...") : name;
  return (
    <Link href={link}>
      <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow  border border-gray-100 relative  h-[400px] w-full  mt-5">
        <strong className="absolute top-0 bg-gray-100 left-0 z-10 w-24 text-sm justify-center text-gray-700 h-8 flex items-center">
          {concatibleBrand}
        </strong>
        <div className="h-72 px-2 py-2 bg-gray-200 flex items-center relative">
          <CardImage img={img} />
        </div>

        <div className="px-2 py-2 text-xs text-gray-600 leading-5 " dir="rtl">
          <span>{nameCut}</span>
        </div>
        <div
          dir="rtl"
          className="px-1 text-gray-500   w-full  text-[11px] justify-end   h-8 flex items-center"
        >
          <span className="px-1  "> ({reviewCount})</span>
          {Array.from({ length: Math.floor(score) }).map((_index) => {
            return <FaStar className="text-sm text-yellow-500" />;
          })}
          <span className="px-1">{score}</span>
        </div>
        <div
          dir="ltr"
          className="w-full flex items-center gap-2 absolute bottom-1   px-2 "
        >
          {haveOriginalPrice && (
            <span dir="ltr" className="line-through text-gray-400 !text-[11px]">
              {originalPrice} TL
            </span>
          )}
          <span
            dir="ltr"
            className={twMerge(
              "text-orange-500   md:text-sm text-[11px]",
              haveOriginalPrice ? "text-red-500" : null
            )}
          >
            {finalPrice} TL
          </span>
        </div>
      </div>
    </Link>
  );
}
