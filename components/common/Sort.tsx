"use client";
import React, { useMemo } from "react";
import { TbArrowsSort } from "react-icons/tb";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useTrendyolContext } from "@/state/context";
import { MdOutlineClose } from "react-icons/md";
import { trendyolSortOptions } from "@/service/data/static";
import useNavigation from "@/hooks/useNavigation";
import { IoMdCheckmark } from "react-icons/io";
import { twMerge } from "tailwind-merge";

interface IProps {
  onClick: () => void;
  sortingText: string | undefined;
}
export default function Sort({ onClick, sortingText }: IProps) {
  return (
    <div
      onClick={onClick}
      className="w-full flex items-center justify-center gap-1"
      dir="rtl"
    >
      <TbArrowsSort className="text-xl text-orange-500" />
      <span className="text-sm text-gray-700">
        {sortingText ? sortingText : "مرتب سازی"}
      </span>
    </div>
  );
}

export const SortDrawer = () => {
  const { showSort, setShowSort } = useTrendyolContext();
  const { simpleUpdateUrl, simpleGetValueByKey } = useNavigation();

  const getCurrentSortValue = simpleGetValueByKey("sort");

  return (
    <Drawer open={showSort} closeThreshold={20}>
      <DrawerContent>
        <DrawerHeader className="m-0 p-0 px-3  flex justify-between h-10   *:">
          <DrawerTitle className="text-gray-700 text-sm w-fit">
            مرتب سازی
          </DrawerTitle>
          <DrawerClose
            asChild
            onClick={() => setShowSort(false)}
            className="cursor-pointer"
          >
            <MdOutlineClose className="text-xl text-gray-500" />
          </DrawerClose>
        </DrawerHeader>
        <hr />
        <DrawerFooter className="flex flex-col">
          {trendyolSortOptions.map((item, index) => {
            const sortChecker =
              getCurrentSortValue && getCurrentSortValue == item.value;
            return (
              <div
                key={index}
                className="w-full  text-xs text-gray-600 h-6 justify-between flex items-center"
                onClick={() => {
                  simpleUpdateUrl("sort", item.value);
                  setShowSort(false);
                }}
              >
                <span className={twMerge(sortChecker ? "text-black" : null)}>
                  {item.text}
                </span>
                {sortChecker && (
                  <IoMdCheckmark className="text-lg text-orange-500" />
                )}
              </div>
            );
          })}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
