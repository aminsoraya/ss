"use client";
import { TrendyolProductDetail } from "@/types/trendyol";
import React, { Fragment } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface CarouselSectionProps {
  images: TrendyolProductDetail["images"];
  imageKey: "normal" | "thumbnail";
  height: string;
  basis?: string;
  itemClassName?: string;
}

const navigationButtonStyles =
  "h-8 w-8 rounded-full bg-white hover:bg-gray-100 absolute md:flex z-10";
const carouselProps = {
  className: "w-full",
  opts: { align: "end" as const },
  dir: "ltr" as const,
};

function CarouselSection({
  images,
  imageKey,
  height,
  basis,
  itemClassName,
}: CarouselSectionProps) {
  return (
    <Carousel {...carouselProps}>
      <CarouselContent className="-ml-1">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className={`pl-1 py-5 ${basis || ""} ${itemClassName || ""}`}
          >
            <div className={`relative ${height} w-full`}>
              <Image
                src={image[imageKey]}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        variant="outline"
        className={`${navigationButtonStyles} left-2 md:left-3`}
      />
      <CarouselNext
        variant="outline"
        className={`${navigationButtonStyles} right-2 md:right-3`}
      />
    </Carousel>
  );
}

export default function ImageGallery({
  images,
}: Pick<TrendyolProductDetail, "images">) {
  return (
    <div className="flex flex-col">
      <div className="border rounded-lg flex flex-col">
        <CarouselSection images={images} imageKey="normal" height="h-96" />
      </div> 
      <CarouselSection
        images={images}
        imageKey="thumbnail"
        height="h-16"
        basis="basis-1/8"
        itemClassName="[&>div]:border [&>div]:border-gray-200  [&>div]:rounded-md"
      />
    </div>
  );
}
