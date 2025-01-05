"use client";
import { MostPopular } from "@/types/trendyol";
import React from "react";
import Card from "./card";
import { FaChevronLeft } from "react-icons/fa6";

interface IProps {
  data: MostPopular[];
}

export default function FavouriteProducts({ data }: IProps) {
  return (
    <div className="w-full  pt-3     my-10 bg-[url('../imgs/trendyolback1.png')] bg-cover rounded-lg ">
      <div className="w-full flex justify-between px-5  text-gray-700">
        <span>محبوب ترینها</span>
        <button className="  py-2 border rounded-lg hover:bg-gray-300 transition-all delay-100 flex items-center px-2 text-sm">
          <span>ادامه لیست</span>
          <FaChevronLeft />
        </button>
      </div>
      <div className="w-full grid grid-cols-5 gap-5 px-5   mt-2">
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
