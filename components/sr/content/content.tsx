import React from "react";
import Header from "./header";
import { Card } from "@/types/trendyol";
import { TrendyolItemsByParams } from "@/types";
import CardComponent from "@/components/common/Card";

export default function Content({ items, totalCount }: TrendyolItemsByParams) {
  return (
    <div className="  w-full px-3 py-1">
      <Header countAll={totalCount} />
      <div className="grid grid-cols-4 gap-x-3 items-center ">
        {items.map((item, index) => (
          <CardComponent {...item} key={index} />
        ))}
      </div>
    </div>
  );
}
