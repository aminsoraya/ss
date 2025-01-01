import React from "react";
import { GiRunningShoe } from "react-icons/gi";
import { IoManSharp, IoWoman } from "react-icons/io5";
import { MdOutlineElderlyWoman, MdOutlineSportsMartialArts, MdPrecisionManufacturing } from "react-icons/md";

export default function Trendyol() {
  return (
    <div>
      <div className="px-5 w-full py-3 flex  items-center gap-5">
        <div className="h-28 w-28 border flex items-center bg-amber-50  justify-center rounded-full   flex-col    ">
          <GiRunningShoe className="text-5xl text-amber-500" />
          <span>کفش</span>
        </div>
        <div className="h-20 w-20 border flex items-center bg-slate-50  justify-center rounded-full    ">
          <MdOutlineSportsMartialArts className="text-5xl text-slate-500" />
        </div>
        <div className="h-20 w-20 border flex items-center bg-green-50  justify-center rounded-full    ">
          <IoManSharp  className="text-5xl text-green-500" />
        </div>
        <div className="h-20 w-20 border flex items-center bg-gray-50  justify-center rounded-full    ">
          <IoWoman  className="text-5xl text-gray-500" />
        </div>
        <div className="h-20 w-20 border flex items-center bg-red-50  justify-center rounded-full    ">
          <MdOutlineElderlyWoman  className="text-5xl text-red-500" />
        </div>
        <div className="h-20 w-20 border flex items-center bg-blue-50  justify-center rounded-full    ">
          <MdPrecisionManufacturing  className="text-5xl text-blue-500" />
        </div>
        <div className="h-20 w-20 border flex items-center bg-amber-50  justify-center rounded-full    ">
          <GiRunningShoe className="text-5xl text-amber-500" />
        </div>
        <div className="h-20 w-20 border flex items-center bg-slate-50  justify-center rounded-full    ">
          <MdOutlineSportsMartialArts className="text-5xl text-slate-500" />
        </div>
        <div className="h-20 w-20 border flex items-center bg-green-50  justify-center rounded-full    ">
          <IoManSharp  className="text-5xl text-green-500" />
        </div>
        <div className="h-20 w-20 border flex items-center bg-gray-50  justify-center rounded-full    ">
          <IoWoman  className="text-5xl text-gray-500" />
        </div>
        <div className="h-20 w-20 border flex items-center bg-red-50  justify-center rounded-full    ">
          <MdOutlineElderlyWoman  className="text-5xl text-red-500" />
        </div>
        <div className="h-20 w-20 border flex items-center bg-blue-50  justify-center rounded-full    ">
          <MdPrecisionManufacturing  className="text-5xl text-blue-500" />
        </div>
        <div className="h-20 w-20 border flex items-center bg-gray-50  justify-center rounded-full    ">
          <IoWoman  className="text-5xl text-gray-500" />
        </div>
        <div className="h-20 w-20 border flex items-center bg-red-50  justify-center rounded-full    ">
          <MdOutlineElderlyWoman  className="text-5xl text-red-500" />
        </div>
        <div className="h-20 w-20 border flex items-center bg-blue-50  justify-center rounded-full    ">
          <MdPrecisionManufacturing  className="text-5xl text-blue-500" />
        </div>
      </div>
    </div>
  );
}
