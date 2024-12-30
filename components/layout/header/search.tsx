import React from "react";
import { IoSearch } from "react-icons/io5";

export default function Serach() {
  return (
    <div className="relative h-12 flex w-full">
      <select className="h-full text-sm px-2 rounded-r text-gray-500 cursor-pointer">
        <option>آمازون</option>
      </select>
      <input type="text" className="h-full px-1 w-full placeholder:text-gray-900 text-xs" placeholder="جستجو یا وارد کردن لینک کالا" />
      <button className="flex items-center justify-center bg-yellow-300 px-3 rounded-l">
        <IoSearch className="text-2xl" />
      </button>
    </div>
  );
}
