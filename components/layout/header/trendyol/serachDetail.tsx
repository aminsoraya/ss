import React from "react";
import { Search as SearchType } from "@/types/trendyol";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function SearchDetail(props: SearchType) {
  const MostPopularKeywords = () => {
    return (
      <div className="w-full flex flex-col  px-2 py-2">
        <h4 className="text-sm text-gray-700">بیشترین جستجو ها</h4>
        <div className="flex items-center text-xs text-gray-500 gap-3 py-2">
          {props.mostPopularKeywords.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="border px-2 py-2 rounded hover:border-orange-500 hover:text-orange-500"
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  const MostPopularProduct = () => {
    const plugin = React.useRef(
      Autoplay({ delay: 2000, stopOnInteraction: false })
    );

    return (
      <div className="w-full flex flex-col px-2 py-5 overflow-x-hidden">
        <h4 className="text-sm text-gray-700 mb-4">محبوب ترین محصولات</h4>
        <Carousel
          plugins={[
            plugin.current,
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {props.popularItems.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 "
              >
                <Link href={item.link}>
                  <Card className="w-full">
                    <CardContent className="py-2   items-center justify-between p-0 rounded-lg   h-32 grid grid-cols-2 ">
                      <div className="w-full h-full px-1 py-1 flex flex-col">
                        <span className="text-[10px] w-full whitespace-nowrap">
                          {item.brand}
                        </span>
                        <span className="text-xs text-gray-600">
                          {item.text}
                        </span>
                        <span className="absolute bottom-3 text-xs text-orange-500">
                          {item.price} TL
                        </span>
                      </div>

                      <div className="h-full p-1 ">
                        <div className="w-full h-full relative">
                          <img
                            src={item.img}
                            alt=""
                            className="h-full rounded"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    );
  };

  return (
    <div className="absolute px-3 inset-x-[-2px] border-t-0 bg-white   border-2  border-orange-500 min-h-[200px] top-[100%] mt-[2px] rounded-b">
      <MostPopularKeywords />
      <MostPopularProduct />
    </div>
  );
}
