"use client";
import { MostPopular } from "@/types/trendyol";
import Card from "./card";
import ProductCarousel from "../common/ProductCarousel";
import backgroundImage from "@/imgs/trendyolback1.png"
import { Button } from "../ui/button";

interface IProps {
  data: MostPopular[];
}

export default function FavouriteProducts({ data }: IProps) {
  const ShowAll=()=>{
    return (
      <Button className="bg-transparent hover:bg-gray-300 rounded-2xl text-black">مشاهده همه</Button>
    )
  }
  return (
    <ProductCarousel
      data={data}
      title="محبوب ترینها"
      backgroundImage={backgroundImage.src}
      renderItem={(item) => <Card {...item} />}
      additionalElement={<ShowAll/>}
    />
  );
}
