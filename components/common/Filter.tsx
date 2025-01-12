import React from "react";
import { FiFilter } from "react-icons/fi";

interface IProps{
    onClick:()=>void
}
export default function Filter({onClick}:IProps) {
  return (
    <div onClick={()=>onClick} className="w-full flex items-center justify-center gap-1" dir="rtl">
      <FiFilter className="text-xl text-orange-500" />
      <span className="text-sm text-gray-700">فیلتر</span>
      <span className="text-orange-500 text-sm">(2)</span>
    </div>
  );
}
