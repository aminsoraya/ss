import { TrendyolProductDetail } from "@/types/trendyol";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function ImageGallery({
  images,
}: Pick<TrendyolProductDetail, "images">) {
  return (
    <Carousel>
      <CarouselContent>
        {images.map((item, index) => (
          <CarouselItem key={index}>
            <div className="relative h-80 w-80 bg-gray-400">
              {/* <Image src={item.normal} fill alt="" className="object-cover" /> */}
              {JSON.stringify(item.normal)}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
