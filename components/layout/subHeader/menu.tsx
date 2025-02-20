"use client";
import { Menu } from "@/types/subHeader";
import Link from "next/link";
import React, { FC, useMemo, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

interface IProps {
  menus: Menu[];
}
export default function MenuComonent({ menus }: IProps) {
  const [hover, setHover] = useState(false);
  const [activeCatIndex, setActiveCatIndex] = useState(0);
 

  const DarkCoverBackGround: FC = () => {
    return (
      <div className="fixed w-screen h-screen right-0 top-[95px] z-20 bg-black opacity-40"></div>
    );
  };

  const getMenuSubsByCatIndex = useMemo(() => {
    if (menus) {
      return menus.at(activeCatIndex)?.subs;
    }
  }, [activeCatIndex, menus]);

  const RenderItems: FC = () => {
    return (
      <div
        className=" absolute top-[31px] bg-white z-30 w-[1250px] h-[600px] border right-0 text-sm   flex  text-gray-700"
        onMouseEnter={() => setHover(true)}
      >
        <aside className="border-l flex flex-col  w-[300px] px-3 py-3 h-full">
          {menus.map((menu, menuIndex) => {
            return (
              <div
                onMouseEnter={() => setActiveCatIndex(menuIndex)}
                key={menuIndex}
                className={twMerge(
                  "flex w-full justify-between items-center hover:text-red-500 cursor-pointer h-10 my-1",
                  menuIndex == activeCatIndex ? "text-red-500" : null
                )}
              >
                <span>{menu.title}</span>
                <IoIosArrowBack />
              </div>
            );
          })}
        </aside>
        <div className="w-[calc(100%-300px)] h-full grid grid-cols-4 px-3 py-3 gap-5">
          {getMenuSubsByCatIndex?.map((item, index) => {
            return (
              <div className="flex flex-col w-full" key={index}>
                <div className="flex items-center  justify-start w-full">
                  <TbPointFilled className="text-red-500 text-xl" />
                  <span className="text-xs text-gray-800">{item.title}</span>
                </div>
                <div className="flex flex-col w-full">
                  {item.childs.map((child, childIndex) => {
                    return (
                      <Link
                        href={child.link}
                        key={childIndex}
                        className="h-8 flex px-2 items-center text-xs cursor-pointer  text-gray-400"
                      >
                        {child.text}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div
      className="relative  h-8 flex items-center justify-center  "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="md:flex hidden items-center gap-2   cursor-pointer">
        <GiHamburgerMenu className="text-xl" />
        <span className="text-xs">دسته بندی</span>
        <FaAngleDown className="text-xs" />
      </div>
      {hover&&(
        <>
          <RenderItems />
          <DarkCoverBackGround />
        </>
      )}
    </div>
  );
}
