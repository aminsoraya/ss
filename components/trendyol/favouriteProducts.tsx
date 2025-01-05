"use client";
import { MostPopular } from "@/types/trendyol";
import React from "react";
import Card from "./card";
import { FaChevronLeft } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface IProps {
  data: MostPopular[];
}

export default function FavouriteProducts({ data }: IProps) {
  const [api, setApi] = React.useState<any>();

  return (
    <div className="w-full pt-3 px-3 my-10 bg-[url('../imgs/trendyolback1.png')] bg-cover rounded-lg">
      <div className="w-full flex justify-between text-gray-700">
        <span>محبوب ترینها</span>
        <button className="py-2 border rounded-lg hover:bg-gray-300 transition-all delay-100 flex items-center px-2 text-sm">
          <span>ادامه لیست</span>
          <FaChevronLeft />
        </button>
      </div>
      <div className="relative md:px-10 px-3">
        <Carousel
          setApi={setApi}
          className="w-full "
          opts={{
            align:  "end",
            
          }}
          dir="ltr"
        >
          <CarouselContent className="-ml-1">
            {data.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/5"
              >
                <Card {...item} />
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
