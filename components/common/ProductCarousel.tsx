"use client";
import React, { ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaChevronLeft } from "react-icons/fa6";
import { ProductCarouselProps } from "@/types";

export default function ProductCarousel<T>({
  data,
  title,
  backgroundImage,
  renderItem,
  viewAllLink,
  viewAllText = "ادامه لیست",
}: ProductCarouselProps<T>) {
  return (
    <div
      className="w-full pt-3 px-3 my-10 rounded-lg bg-cover  "
      style={{
        background: `url('${backgroundImage}')  `,
        backgroundRepeat: "round",
      }}
    >
      <div className="w-full flex justify-between text-gray-700">
        <div>{title}</div>
        {viewAllLink && (
          <button className="py-2 border rounded-lg hover:bg-gray-300 transition-all delay-100 flex items-center px-2 text-sm">
            <span>{viewAllText}</span>
            <FaChevronLeft />
          </button>
        )}
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
