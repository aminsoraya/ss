"use client";
import { MostPopular } from "@/types/trendyol";
import React from "react";
import Card from "./card";

interface IProps {
  data: MostPopular[];
}

export default function FavouriteProducts({ data }: IProps) {
  
  return (
    <div className="w-full  pt-3 bg-gray-100   my-10 ">
      <div className="w-full flex justify-between px-5  text-gray-700">
        <span>محبوب ترینها</span>
        <button className="px-2 py-2 border rounded-lg">ادامه لیست</button>
      </div>
      <div className="w-full grid grid-cols-5 gap-5 px-5 h-80 mt-2">
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
