import React from "react";
import { BiSolidTruck } from "react-icons/bi";
import { IoShieldCheckmark } from "react-icons/io5";

export default function GarantyAndPolicy() {
  return (
    <div className="w-full h-8 px-5 flex items-center justify-between text-xs text-gray-600">
      <div className="flex items-center gap-1">
        <IoShieldCheckmark className="text-blue-500 text-lg" />
        <span>گارانتی و رویه بازگشت کالا</span>
      </div>
      <div className="flex items-center gap-1">
        <BiSolidTruck className="text-red-500 text-lg " />
        <span>هزینه ارسال داخل کشور رایگان</span>
      </div>
    </div>
  );
}
