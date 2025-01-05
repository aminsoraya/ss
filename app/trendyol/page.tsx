import Amazing from "@/components/trendyol/amazing";
import Brands from "@/components/trendyol/brands";
import Categories from "@/components/trendyol/categories";
import FavouriteProducts from "@/components/trendyol/favouriteProducts";
import { Container } from "@/components/ui/container";
import { TrendyolMain } from "@/types";
import React from "react";

export default async function TrendyolComponent() {
  const fetchedData = (await fetch(
    process.env.NEXT_PUBLIC_TRENDYOL_MAIN?.toString()!,
    {
      next: {
        revalidate: 0,
      },
    }
  ).then((res) => res.json())) as TrendyolMain;

 
  return (
    
      <Container>
        <Categories />
        <FavouriteProducts data={fetchedData.mostPopular} />
        <Brands />
        <Amazing data={fetchedData.amazingOffer} />
      </Container>
     
  );
}
