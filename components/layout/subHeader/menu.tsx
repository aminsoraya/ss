import { Menu } from "@/types/subHeader";
import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

interface IProps {
  menus: Menu[];
}
export default function MenuComonent({ menus }: IProps) {
  return (
    <div className="flex items-center gap-2 text-gray-50">
      <GiHamburgerMenu className="text-xl" />
      <span className="text-xs">دسته بندی</span>
      <FaAngleDown className="text-xs" />
    </div>
  );
}
