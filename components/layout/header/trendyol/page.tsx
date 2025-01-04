"use client";

import { FaRegUser } from "react-icons/fa6";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Search, Menu, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchDetail from "./serachDetail";
import { Trendyol } from "@/types";
import { Search as SearchType } from "@/types/trendyol";

 
export default function TrendyolHeader(props: SearchType) {
  const navigation = [
    { name: "خانه", href: "/" },
    { name: "ترندیول", href: "/trendyol" },
    { name: "آمازون", href: "/amazon" },
  ];

 
  const [searchFocus, setSearchFocus] = useState(false);

  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <Container>
        <div className="flex min-h-16  items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 hidden md:flex">
            Trendyol
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex relative flex-1 max-w-xl">
            <div
              onBlur={() => setSearchFocus((state) => !state)}
              onFocus={() => setSearchFocus((state) => !state)}
              className="w-full relative transition-all group focus-within:rounded-b-none focus-within:outline focus-within:outline-2 focus-within:shadow focus-within:outline-orange-500 rounded-md"
            >
              <Input
                type="search"
                placeholder="محصول، دسته یا برند مورد نظر خود را تایپ کنید"
                className="pr-10 bg-gray-100 focus-within:shadow-lg focus-within:bg-white border-none focus:!ring-0 focus:!ring-offset-0 text-xs placeholder:text-xs w-full"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-orange-500" />
              {searchFocus && <SearchDetail {...props} />}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <IoCartOutline className="text-2xl" />
            <FaRegUser className="text-xl" />
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center  flex-col md:hidden justify-between w-full my-2 ">
            <div className="flex items-center  h-10  justify-between w-full ">
              <div className=" flex items-center gap-2">
                <GiHamburgerMenu className="text-2xl" />
                <span>Logo</span>
              </div>
              <div className="flex items-center gap-2">
                <IoCartOutline className="text-2xl" />
                <FaRegUser className="text-xl" />
              </div>
            </div>
            <div
              onBlur={() => setSearchFocus((state) => !state)}
              onFocus={() => setSearchFocus((state) => !state)}
              className="w-full relative transition-all  group focus-within:rounded-b-none focus-within:outline focus-within:outline-2 focus-within:shadow focus-within:outline-orange-500 rounded-md"
            >
              <Input
                type="search"
                placeholder="محصول، دسته یا برند مورد نظر خود را تایپ کنید"
                className="pr-10 bg-gray-100 focus-within:shadow-lg focus-within:bg-white border-none focus:!ring-0 focus:!ring-offset-0 text-xs placeholder:text-xs w-full"
              />
              <Search  className="absolute right-3 top-2.5 h-5 w-5 text-orange-500" />
              {searchFocus && (
                <div className="absolute inset-x-[-2px] border-t-0 bg-white   border-2  border-orange-500 min-h-[200px] top-[100%] mt-[2px] rounded-b"></div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
