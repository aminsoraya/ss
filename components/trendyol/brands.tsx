"use client";
import { TrendyolMain } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function Brands({
  brandsLink,
}: Pick<TrendyolMain, "brandsLink">) {
  const router = useRouter();

  return (
    <div className="w-full h-28 my-2 flex items-center justify-evenly">
      <div className="relative px-12"> {/* Added wrapper with padding */}
        <Carousel
          className="w-full"
          opts={{
            align: "start",
          }}
          dir="ltr"
        >
          <CarouselContent className="-ml-1">
            {brandsLink.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 basis-1/2 md:basis-1/6 lg:basis-1/9  relative"
              >
                <Image
                  className="border rounded-lg shadow cursor-pointer"
                  onClick={() => router.push(item.link)}
                  src={item.img}
                  key={index}
                  alt=""
                  width={100}
                  height={100}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -left-4 top-1/2 -translate-y-1/2">
            <CarouselPrevious
              variant="outline"
              className="h-8 w-8 rounded-full bg-white hover:bg-gray-100"
            />
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2">
            <CarouselNext
              variant="outline"
              className="h-8 w-8 rounded-full bg-white hover:bg-gray-100"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
