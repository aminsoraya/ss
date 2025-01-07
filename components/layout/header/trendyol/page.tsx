"use client";
import { Container } from "@/components/ui/container";
import { useEffect, useState } from "react";
import { Search as SearchType } from "@/types/trendyol";
import { twMerge } from "tailwind-merge";
import MobileNavigation from "./mobileNavigation";
import { Menu as MenuType } from "@/types/subHeader";
import DesktopNavigation from "./desktop";

export default function TrendyolHeader(
  props: SearchType & { responsiveMenuItems: MenuType[] }
) {
  const [searchFocus, setSearchFocus] = useState(false);
  const [haveBorder, setHaveBorder] = useState<boolean>(false);
  const { responsiveMenuItems, ...search } = props;

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
          {/* Desktop Navigation */}
          <DesktopNavigation
            searchFocus={searchFocus}
            setSearchFocus={setSearchFocus}
            search={search}
            responsiveMenuItems={props.responsiveMenuItems}
          />

          {/* Mobile Navigation */}
          <MobileNavigation
            search={search}
            responsiveMenuItems={props.responsiveMenuItems}
          />
        </div>
      </Container>
    </header>
  );
}
