"use client";
import KeywordsLink from "@/components/common/KeywordsLink";
import { BestShopMark } from "@/types/footer";
import Link from "next/link";
import React from "react";

interface IProps {
  data: BestShopMark[];
}
export default function BestMarketsAndShoppings({ data }: IProps) {
  return (
    <KeywordsLink
      data={data}
      title="مارک ها و فروشگاه های محبوب"
      render={(item, index) => (
        <Link href={item.link} key={index} className="text-[10px] md:text-xs text-gray-600">
          {item.text}
        </Link>
      )}
    />
  );
}
