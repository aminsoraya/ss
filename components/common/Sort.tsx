"use client"
import React from "react";
import { TbArrowsSort } from "react-icons/tb";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useTrendyolContext } from "@/state/context";

interface IProps {
  onClick: () => void;
}
export default function Sort({ onClick }: IProps) {
  return (
    <div
      onClick={onClick}
      className="w-full flex items-center justify-center gap-1"
      dir="rtl"
    >
      <TbArrowsSort className="text-xl text-orange-500" />
      <span className="text-sm text-gray-700">مرتب سازی</span>
    </div>
  );
}

export const SortDrawer = () => {
  const { showSort } = useTrendyolContext();
  return (
    <Drawer open={showSort}>
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose></DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
