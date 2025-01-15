"use client";
import { Container } from "@/components/ui/container";
import { useEffect, useState } from "react";
import { Search as SearchType } from "@/types/trendyol";
import { twMerge } from "tailwind-merge";
import { Menu } from "@/types/subHeader";
import MobileNavigation from "./mobileNavigation";
import DesktopNavigation from "./desktopNavigation";

export default function TrendyolHeader(
  props: SearchType & { menuItems: Menu[] }
) {
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
        "sticky top-0   z-50 bg-gray-50 border-b lg:bg-white lg:border-none",
        haveBorder ? "border-b" : ""
      )}
    >
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-4 ">
          <DesktopNavigation {...props} />
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
