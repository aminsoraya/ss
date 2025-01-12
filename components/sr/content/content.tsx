import React from "react";
import Header from "./header";
import { TrendyolItemsByParams } from "@/types";
import CardComponent from "@/components/common/Card";
import { SortDrawer } from "@/components/common/Sort";
import { FilterDrawer } from "@/components/common/Filter";
import { TrendyolContextProvider } from "@/state/context";

export default function Content({
  items,
  totalCount,
  title,
  categoriesRoute,
}: TrendyolItemsByParams & { title: string } & { categoriesRoute: string }) {
  const ContentDetail = () => (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 !px-1 md:px-3  grid-cols-2 gap-x-3 items-center ">
      {items.map((item, index) => (
        <CardComponent {...item} key={index} />
      ))}
    </div>
  );
  return (
    <div className="  w-full   pt-1">
      <TrendyolContextProvider>
        <Header countAll={totalCount} title={title} />
        <ContentDetail />
        <SortDrawer />
        <FilterDrawer categoriesRoute={categoriesRoute} />
      </TrendyolContextProvider>
    </div>
  );
}
