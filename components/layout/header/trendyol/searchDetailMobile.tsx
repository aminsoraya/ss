"use client"
import React, { Fragment } from "react";
import { Search as SearchType } from "@/types/trendyol";
import { FaAngleRight, FaChevronLeft, FaFire } from "react-icons/fa6";
import CardComponent from "./card";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";

interface IProps {
  search: SearchType;
  close: () => void;
}
export default function SearchDetailMobile({ search, close }: IProps) {
  const InputSection = () => {
    return (
      <div className="w-full h-12 bg-white flex items-center ">
        <FaChevronLeft className="rotate-180 text-xl mx-2" onClick={close} />
        <input
          type="text"
          className="w-full h-full outline-none placeholder:text-xs"
          placeholder="جستجوی کالا"
        />
      </div>
    );
  };

  const BodySection = () => {
    return (
      <Fragment>
        <div className="w-full flex items-center justify-between px-3 h-10">
          <div className="flex items-center   text-xs gap-1">
            <div className="w-6 h-6 bg-orange-500 rounded-full text-white flex items-center justify-center">
              <IoIosStar className="text-lg" />
            </div>
            <span>محصولات محبوب</span>
          </div>
          <button className="text-xs text-orange-400 flex items-center">
            <span>مشاهده همه</span>
            <FaAngleRight className="text-sm rotate-180" />
          </button>
        </div>
        <div className="px-3 py-3 w-full  ">
          <div className="w-full flex overflow-auto gap-x-3">
            {search.popularItems.map((item, index) => (
              <CardComponent {...item} key={index} />
            ))}
          </div>
        </div>
        <div className="w-full flex items-center justify-between px-3 h-10">
          <div className="flex items-center   text-xs gap-1">
            <div className="w-6 h-6 bg-orange-500 rounded-full text-white flex items-center justify-center">
              <FaFire className="text-lg" />
            </div>
            <span>بیشترین جستجو ها</span>
          </div>
        </div>
        <div className="px-3 py-3 w-full flex flex-wrap gap-3 ">
          {search.mostPopularKeywords.map((item, index) => (
            <Link href={item.link} key={index} className="border px-3 py-3 text-xs bg-white rounded-lg border-gray-300 text-gray-700">
              {item.text}
            </Link>
          ))}
        </div>
      </Fragment>
    );
  };

  return (
    <div className="w-screen h-screen z-[100] fixed top-0 right-0 bg-gray-100">
      <InputSection />
      <BodySection />
    </div>
  );
}
