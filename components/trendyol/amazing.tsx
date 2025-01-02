"use client";
import { AmazingOfffer } from "@/types/trendyol";
import React from "react";
import Card from "./card";

interface IProps {
  data: AmazingOfffer[];
}
export default function Amazing({ data }: IProps) {
  return (
    <div className="w-full gradinat-trendyol h-96 mt-8 mb-24 px-5 py-5">
      <div className="w-full flex justify-between text-gray-50">
        <div className="flex items-center gap-3">
          <strong>شگفت انگیز ها</strong>
          <div className="flex gap-2 items-center">
            <span className="px-3 py-2 text-gray-800 rounded-lg bg-white">00</span>
            <span>:</span>
            <span className="px-3 py-2 text-gray-800 rounded-lg bg-white">10</span>
            <span>:</span>
            <span className="px-3 py-2 text-gray-800 rounded-lg bg-white">00</span>
          </div>
        </div>
        <span>ادامه لیست</span>
      </div>
      <div className="w-full grid grid-cols-5 gap-5 px-5 h-80 mt-2">
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
