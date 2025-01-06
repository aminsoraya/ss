"use client";
import { FaRegUser } from "react-icons/fa6";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import SearchDetail from "./serachDetail";
import { Search as SearchType } from "@/types/trendyol";
import { twMerge } from "tailwind-merge";
import MobileNavigation from "./mobileNavigation";
import { Menu as MenuType } from "@/types/subHeader";

export default function TrendyolHeader(
  props: SearchType & { responsiveMenuItems: MenuType[] }
) {
  const [searchFocus, setSearchFocus] = useState(false);
  const [haveBorder, setHaveBorder] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setHaveBorder(true);
      else setHaveBorder(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={twMerge(
        " sticky top-0 bg-white z-50",
        haveBorder ? "border-b" : null
      )}
    >
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 hidden md:flex">
            Trendyol
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div
            className="hidden md:flex relative flex-1 max-w-xl"
            onBlur={() => setSearchFocus((state) => !state)}
            onFocus={() => setSearchFocus((state) => !state)}
          >
            <div className="w-full relative transition-all group focus-within:rounded-b-none focus-within:outline focus-within:outline-2 focus-within:shadow focus-within:outline-orange-500 rounded-md">
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
          <MobileNavigation responsiveMenuItems={props.responsiveMenuItems} />
        </div>
      </Container>
    </header>
  );
}
