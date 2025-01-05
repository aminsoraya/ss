"use client";
import React, { ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductCarouselProps } from "@/types";

export default function ProductCarousel<T>({
  data,
  title,
  backgroundImage,
  renderItem,
  additionalElement,
}: ProductCarouselProps<T>) {
  return (
    <div
      className="w-full py-3 px-3 my-10 rounded-lg bg-cover  "
      style={{
        background: `url('${backgroundImage}')  `,
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover" 
      }}
    >
      <div className="w-full flex justify-between text-gray-700 px-2 py-2">
        <div>{title}</div>
        {additionalElement}
      </div>
      <div className="relative md:px-10 px-3">
        <Carousel
          className="w-full"
          opts={{
            align: "end",
          }}
          dir="ltr"
        >
          <CarouselContent className="-ml-1">
            {data.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/5"
              >
                {renderItem(item)}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            variant="outline"
            className="h-8 w-8 rounded-full bg-white hover:bg-gray-100"
          />
          <CarouselNext
            variant="outline"
            className="h-8 w-8 rounded-full bg-white hover:bg-gray-100"
          />
        </Carousel>
      </div>
    </div>
  );
}
