"use client";
import KeywordsLink from "@/components/common/KeywordsLink";
import {  FavouritePage } from "@/types/footer";
import Link from "next/link";
import React from "react";

interface IProps {
  data: FavouritePage[];
}
export default function PopularPages({ data }: IProps) {
  return (
    <KeywordsLink
      data={data}
      title= "صفحات محبوب"
      render={(item, index) => (
        <Link href={item.link} key={index} className="text-xs text-gray-800">
          {item.text}
        </Link>
      )}
    />
  );
}
