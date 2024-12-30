import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

function Menu() {
  return (
    <div className="flex items-center gap-2 text-gray-50">
      <GiHamburgerMenu className="text-xl" />
      <span className="text-xs">دسته بندی</span>
      <FaAngleDown className="text-xs" />
    </div>
  );
}

export default Menu;
