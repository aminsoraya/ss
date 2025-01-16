"use client"
import { TrendyolProductDetail } from "@/types/trendyol";
import React, { useState } from "react";
import { Price } from "./specification";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
    </div>
  );
}

const InStock = (props: Pick<TrendyolProductDetail, "remainCount">) => {
  const [open, setOpen] = useState<boolean | undefined>();
  return (
    <div>
      <span>در انبار</span>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search framework..." />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {Array.from({ length: props.remainCount }).map((_, index) => (
                  <CommandItem key={index}>{index + 1}</CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};
