import Categories from "@/components/trendyol/categories";
import FavouriteProducts from "@/components/trendyol/favouriteProducts";
import React from "react";

export default function Trendyol() {
  return (
    <div className="w-full flex justify-center">
      <div className="container">
        <Categories />
        <FavouriteProducts />
        <div className="w-full h-20"></div>
      </div>
    </div>
  );
}
