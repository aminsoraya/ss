import React from "react";
import Header from "./header";
import { Card } from "@/types/trendyol";
import { TrendyolItemsByParams } from "@/types";
import CardComponent from "@/components/common/Card";

export default function Content({
  items,
  totalCount,
  title,
}: TrendyolItemsByParams & { title: string }) {
  return (
    <div className="  w-full px-3 py-1">
      <Header countAll={totalCount} title={title} />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3  grid-cols-2 gap-x-3 items-center ">
        {items.map((item, index) => (
          <CardComponent {...item} key={index} />
        ))}
      </div>
    </div>
  );
}
