import Amazing from "@/components/trendyol/amazing";
import Brands from "@/components/trendyol/brands";
import Categories from "@/components/trendyol/categories";
import FavouriteProducts from "@/components/trendyol/favouriteProducts";
import { Trendyol } from "@/types";
import React from "react";

export default async function TrendyolComponent() {
  const initialData = (await fetch(
    process.env.NEXT_PUBLIC_TRENDYOL?.toString()!,
    {
      next: {
        revalidate: 0,
      },
    }
  ).then((res) => res.json())) as Trendyol;

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1200px]">
        <Categories />
        <FavouriteProducts data={initialData.mostPopular} />
        <Brands />
        <Amazing data={initialData.amazingOffer} />
      </div>
    </div>
  );
}
