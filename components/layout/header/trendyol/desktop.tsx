"use client";
import React, { Dispatch, Fragment, SetStateAction, useRef } from "react";
import { FaRegUser } from "react-icons/fa6";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import SearchDetail from "./serachDetail";
import { Search as SearchType } from "@/types/trendyol";
import { Menu as MenuType } from "@/types/subHeader";

interface IProps {
  searchFocus: boolean;
  setSearchFocus: Dispatch<SetStateAction<boolean>>;
  search: SearchType;
  responsiveMenuItems: MenuType[];
}
export default function DesktopNavigation({
  setSearchFocus,
  searchFocus,
  search,
}: IProps) {
  const divRef: any = useRef(null);

  const handleOutsideClick = (event: any) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      console.log("Close when clicking outside ");
      setSearchFocus(false); // Close when clicking outside
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    // Cleanup listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <Fragment>
      {/* Logo */}
      <Link href="/" className="flex-shrink-0 hidden md:flex">
        Trendyol
      </Link>

      {/* Search Bar - Hidden on mobile */}
      <div className="hidden md:flex relative flex-1 max-w-xl">
        <div
          ref={divRef}
          className="w-full relative transition-all group focus-within:rounded-b-none focus-within:outline focus-within:outline-2 focus-within:shadow focus-within:outline-orange-500 rounded-md"
        >
          <Input
            onClick={() => setSearchFocus(true)}
            type="search"
            placeholder="محصول، دسته یا برند مورد نظر خود را تایپ کنید"
            className="pr-10 bg-gray-100 focus-within:shadow-lg focus-within:bg-white border-none focus:!ring-0 focus:!ring-offset-0 text-xs placeholder:text-xs w-full"
          />
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-orange-500" />
          {searchFocus && <SearchDetail {...search} />}
        </div>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <IoCartOutline className="text-2xl" />
        <FaRegUser className="text-xl" />
      </div>
    </Fragment>
  );
}
