 
import { Category } from "@/types/subHeader";
import localImage from "@/utils/localImage";
import Link from "next/link";
import React from "react";
import { FaTruckFast } from "react-icons/fa6";

interface IProps {
  categories: Category[];
}
export default function Categories({ categories }: IProps) {
  return (
    <div className="flex items-center text-xs text-white gap-5 w-[calc(100%-200px)]">
      {categories.map((item, index) => (
        <Link
          href={item.link}
          dir={item.dir ? item.dir : "rtl"}
          key={index}
          className="flex items-center gap-2 bg-header px-2 h-6 rounded"
        >
          <img src={item.img ? localImage(item.img!) : ""} alt="" />
          <span>{item.text}</span>
          {item.icon && <FaTruckFast className="text-lg" />}
        </Link>
      ))}
    </div>
  );
}
