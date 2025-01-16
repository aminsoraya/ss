"use client";
import { ColorInfo, TrendyolProductDetail } from "@/types/trendyol";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Specification(props: Partial<TrendyolProductDetail>) {
  const {
    name,
    brand,
    colors,
    remainCount,
    reviews,

    sizes,
    score,
    originalPrice,
    questionAndAnswer,
    finalPrice,
    commentsLink,
    features,
  } = props;
  return (
    <div className="px-5 ">
      <BrandAndName brand={brand!} name={name!} />
      <RankReviewsComment
        questionAndAnswer={questionAndAnswer!}
        reviews={reviews!}
        score={score!}
      />
      <ReviewsLink reviews={reviews!} />
      <Price originalPrice={originalPrice!} finalPrice={finalPrice!} />
      <hr />
      <Colors colors={colors!} />
    </div>
  );
}

const BrandAndName = ({
  brand,
  name,
}: Pick<TrendyolProductDetail, "brand" | "name">) => {
  return (
    <Fragment>
      <strong className="px-1">{brand}</strong>
      <span className="text-gray-700">{name}</span>
    </Fragment>
  );
};

const RankReviewsComment = (
  props: Pick<TrendyolProductDetail, "reviews" | "score" | "questionAndAnswer">
) => {
  return (
    <div className="flex items-center gap-1 my-3">
      <strong>{props.score}</strong>
      {Array.from({ length: Math.floor(props.score) }).map((_, index) => (
        <FaStar className="text-yellow-500" key={index} />
      ))}
      <TbPointFilled className="text-gray-400 text-xs" />
      <Link
        href={props.reviews.link}
        className="text-xs text-gray-600 flex items-center hover:border-b border-black hover:text-orange-500 hover:border-orange-500"
      >
        <span>ارزیابی</span>
        <span className="text-black px-1 hover:text-orange-500  ">
          {props.reviews.count}
        </span>
      </Link>
      <TbPointFilled className="text-gray-400 text-xs" />
      <Link
        href={props.questionAndAnswer.link}
        className="text-xs text-gray-600 flex items-center hover:border-b border-black hover:text-orange-500 hover:border-orange-500"
      >
        <span>پرسش و پاسخ</span>
        <span className="text-black px-1 hover:text-orange-500  ">
          {props.questionAndAnswer.count}
        </span>
      </Link>
    </div>
  );
};

const ReviewsLink = (props: Pick<TrendyolProductDetail, "reviews">) => {
  return (
    <Link
      href={props.reviews.link}
      className="flex my-3 bg-yellow-50 w-fit   items-center gap-2"
    >
      <div className="h-6 w-6 bg-yellow-500 flex items-center justify-center rounded-full">
        <FaStar className="text-white" />
      </div>
      <span className="text-xs text-gray-800">مشاهده نظرات کاربران</span>
      <FaChevronLeft className="text-xs text-gray-800" />
    </Link>
  );
};

const Price = (
  props: Pick<TrendyolProductDetail, "originalPrice" | "finalPrice">
) => {
  const haveOriginalPrice = parseInt(props.originalPrice) > 0;

  return (
    <div className="w-full   flex items-center    px-2 ">
      {haveOriginalPrice && (
        <span
          dir="ltr"
          className="line-through text-lg text-gray-400 !text-[11px]"
        >
          {props.originalPrice} TL
        </span>
      )}
      <span
        dir="ltr"
        className={twMerge(
          "text-orange-500     text-lg",
          haveOriginalPrice ? "text-red-500" : null
        )}
      >
        {props.finalPrice} TL
      </span>
    </div>
  );
};

const Colors = (props: Pick<TrendyolProductDetail, "colors">) => {
  const pathname = usePathname();

  const color=props.colors.find(c=>pathname.includes( c.link))

  return (
    <div className="flex flex-col my-2">
      <div className="flex items-center my-2">
        <strong className="text-gray-800">رنگ :</strong>
        <span className="text-xs px-2 text-gray-700">{color?.name} </span>
      </div>
      <div className="flex items-center gap-x-2">
        {props.colors.map((item, index) => {
          return (
            <Link
              href={`/trendyol/${item.link}`}
              key={index}
              className={twMerge(
                `relative  hover:shadow cursor-pointer h-16 w-12 border rounded-lg overflow-hidden`,
                pathname.includes(item.link) ? "border-orange-500 border-2" : ""
              )}
            >
              <Image fill src={item.img} className="object-cover" alt="" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
