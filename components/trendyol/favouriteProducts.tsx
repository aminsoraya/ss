"use client";
import { MostPopular } from "@/types/trendyol";
import Card from "./card";
import ProductCarousel from "../common/ProductCarousel";
import backgroundImage from "@/imgs/trendyolback1.png"

interface IProps {
  data: MostPopular[];
}

export default function FavouriteProducts({ data }: IProps) {
  return (
    <ProductCarousel
      data={data}
      title="محبوب ترینها"
      backgroundImage={backgroundImage.src}
      renderItem={(item) => <Card {...item} />}
      viewAllLink="/products/popular"
    />
  );
}
