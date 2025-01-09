import { FaRegUser } from "react-icons/fa6";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import SearchBar from "./searchbar";
import React, { Fragment, useState } from "react";
import { Search as SearchType } from "@/types/trendyol";
import { Menu } from "@/types/subHeader";

export default function DesktopNavigation(
  props: SearchType & { menuItems: Menu[] }
) {
  const [searchFocus, setSearchFocus] = useState(false);

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
  return (
    <Fragment>
      <Logo />
      <SearchBar
        {...props}
        searchFocus={searchFocus}
        onFocusChange={setSearchFocus}
      />
      <DesktopNav />
    </Fragment>
  );
}
