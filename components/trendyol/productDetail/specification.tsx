"use client";
import { ColorInfo, TrendyolProductDetail } from "@/types/trendyol";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { truncateString } from "@/utils/common";

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
    <div className="px-5 col-span-2">
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
      <Sizes sizes={sizes!} />
      <ShoppingButtons />
      <Features features={features!} />
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

  const color = props.colors.find((c) => pathname.includes(c.link));

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

const Sizes = (props: Pick<TrendyolProductDetail, "sizes">) => {
  const pathname = usePathname();

  const size = props.sizes.find((c) => pathname.includes(c.value));

  return (
    <div className="flex flex-col my-2">
      <div className="flex items-center my-2">
        <strong className="text-gray-800">سایز :</strong>
        <span className="text-xs px-2 text-gray-700">{size?.value} </span>
      </div>
      <div className="flex items-center gap-x-2">
        {props.sizes.map((item, index) => {
          return (
            <Link
              href={`/trendyol/${item.link}`}
              key={index}
              className={twMerge(
                `relative  hover:shadow cursor-pointer h-8  text-xs flex items-center px-3 border rounded-lg overflow-hidden`,
                pathname.includes(item.value)
                  ? "border-orange-500 border-2"
                  : ""
              )}
            >
              {item.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const ShoppingButtons = () => {
  return (
    <div className="flex items-center gap-x-3 my-5">
      <button className="bg-orange-500 h-12 px-5 text-white rounded hover:bg-orange-700">
        خرید محصول
      </button>

      <button className="border-orange-500 h-12 px-5 text-orange-500 hover:bg-orange-500 hover:text-white border rounded">
        افزودن به سبد خرید
      </button>
    </div>
  );
};

const Features = (props: Pick<TrendyolProductDetail, "features">) => {
  return (
    <div className="w-full my-5 ">
      <span className="h-12">ویژگی های محصول</span>
      <div className="grid my-5 grid-cols-4 gap-x-3 gap-5">
        {props.features.map((item, index) => {
          return (
            <div
              className="flex flex-col bg-gray-100 px-2 py-2 rounded-lg justify-between"
              key={index}
            >
              <span className="text-gray-600 text-xs ">
                {truncateString(item.title, 9)}
              </span>
              <span className="text-gray-800 text-[10px]">
                {truncateString(item.text)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
