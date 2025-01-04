import { trendyolBrands } from "@/service/data/static";
import React from "react";

export default function Brands() {
  return (
    <div className="w-full bg-gray-100 h-28 mt-32 flex items-center justify-evenly">
      {trendyolBrands.map((item, index) => (
        <img src={item} key={index} alt="" width={80} height={80}  />
      ))}
    </div>
  );
}
