"use client";
import { TrendyolProductDetail } from "@/types/trendyol";
import React, { useState } from "react";
import { Price } from "./specification";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronsUpDown } from "lucide-react";

export default function SideBasket(
  props: Pick<
    TrendyolProductDetail,
    "finalPrice" | "originalPrice" | "remainCount"
  >
) {
  return (
    <div className="w-full border h-full rounded-lg px-3 py-3">
      <Price
        finalPrice={props.finalPrice}
        originalPrice={props.originalPrice}
      />
      <InStock remainCount={props.remainCount!} />
      <ProtectionPlan />
      <ShoppingButtons />
    </div>
  );
}

const InStock = (props: Pick<TrendyolProductDetail, "remainCount">) => {
  return (
    <div className="my-5">
      <div className="my-2">
        <span className="text-green-700 py-5">در انبار</span>
      </div>
      <select className="w-full h-12 px-3 rounded bg-gray-50 border">
        {Array.from({ length: props.remainCount }).map((_, index) => (
          <option value={index + 1}>{index + 1}</option>
        ))}
      </select>
    </div>
  );
};

const ShoppingButtons = () => {
  return (
    <div className="flex items-center gap-y-3 my-5 flex-col">
      <button className="bg-orange-500 h-12 w-full px-5 text-white rounded hover:bg-orange-700">
        خرید محصول
      </button>

      <button className="border-orange-500 h-12 w-full px-5 text-orange-500 hover:bg-orange-500 hover:text-white border rounded">
        افزودن به سبد خرید
      </button>
    </div>
  );
};

const ProtectionPlan = () => {
  return (
    <div className="flex items-center gap-y-3 my-5 flex-col justify-start w-full ">
      <span className="w-full">انتخاب گارانتی :</span>
      <div className="w-full">
        <input type="checkbox" name="" id="" />
        <span className="px-1 text-xs text-gray-700">
          گارانتی یک ساله موجوجم{" "}
        </span>
      </div>
      <div className="w-full">
        <input type="checkbox" name="" id="" />
        <span className="px-1 text-xs text-gray-700">
          گارانتی دو ساله موجوجم{" "}
        </span>
      </div>
    </div>
  );
};
