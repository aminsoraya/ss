"use client";
import { FaRegUser } from "react-icons/fa6";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { Search as SearchType } from "@/types/trendyol";
import { twMerge } from "tailwind-merge";
import SearchBar from "./searchbar";
import { Menu } from "@/types/subHeader";
import MobileNavigation from "./mobileNavigation";

const Logo: React.FC = () => (
  <Link href="/" className="flex-shrink-0 hidden md:flex">
    Trendyol
  </Link>
);

const DesktopNav: React.FC = () => (
  <div className="hidden md:flex items-center gap-4">
    <IoCartOutline className="text-2xl" />
    <FaRegUser className="text-xl" />
  </div>
);

export default function TrendyolHeader(
  props: SearchType & { menuItems: Menu[] }
) {
  const [searchFocus, setSearchFocus] = useState(false);
  const [haveBorder, setHaveBorder] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setHaveBorder(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={twMerge(
        "sticky top-0 bg-white z-50",
        haveBorder ? "border-b" : ""
      )}
    >
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-4">
          <Logo />
          <SearchBar
            {...props}
            searchFocus={searchFocus}
            onFocusChange={setSearchFocus}
          />
          <DesktopNav />
          <MobileNavigation
            responsiveMenuItems={props.menuItems}
            search={{
              mostPopularKeywords: props.mostPopularKeywords,
              popularItems: props.popularItems,
            }}
          />
        </div>
      </Container>
    </header>
  );
}
