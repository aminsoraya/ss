import React, { FC, Fragment, useEffect, useMemo } from "react";
import { SearchDetailType, Search as SearchType } from "@/types/trendyol";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardComponent from "./card";
import DynamicSearchDetail from "./dynamicSearchDetail";

export default function SearchDetail(
  props: SearchType & { searchResults: SearchDetailType[] | undefined }
) {
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
    return (
      <div className="w-full flex flex-col px-2 py-5 overflow-hidden">
        <h4 className="text-sm text-gray-700 mb-4">محبوب ترین محصولات</h4>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent z-10"></div>
          <Carousel
            className="w-full"
            opts={{
              align: "start",
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {props.popularItems.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <CardComponent {...item} fullWidth />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 z-20">
              <CarouselNext className="rotate-180 bg-white border-2 cursor-pointer" />
            </div>
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-20">
              <CarouselPrevious className="rotate-180 bg-white border-2 cursor-pointer" />
            </div>
          </Carousel>
        </div>
      </div>
    );
  };

 

  return (
    <div className="absolute px-3 inset-x-[-2px]   bg-white   border-2  border-orange-500 min-h-[200px] top-[100%] mt-[1px] rounded-b">
      {props.searchResults&&props.searchResults.length>0 ? (
        <div className="py-3">
          
          <span className="mx-3 my-3">نتایج جستجو</span>
          <DynamicSearchDetail data={props.searchResults} />
        </div>
      ) : (
        <Fragment>
          <MostPopularKeywords />
          <MostPopularProduct />
        </Fragment>
      )}
    </div>
  );
}
