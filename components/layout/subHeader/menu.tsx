"use client";
import { Menu } from "@/types/subHeader";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

interface IProps {
  menus: Menu[];
}
export default function MenuComonent({ menus }: IProps) {
  const [hover, setHover] = useState(false);
  console.log("hover", hover);

  return (
    <div
      className="relative"
      onMouseMove={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex items-center gap-2 text-gray-50">
        <GiHamburgerMenu className="text-xl" />
        <span className="text-xs">دسته بندی</span>
        <FaAngleDown className="text-xs" />
      </div>
      {hover && (
        <div className="flex flex-col absolute top-0 bg-white w-full">
          {menus.map((menu, menuIndex) => {
            return <span key={menuIndex}>{menu.title}</span>;
          })}
        </div>
      )}
    </div>
  );
}
