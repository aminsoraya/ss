import React, { Fragment, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { X } from "lucide-react";
import Link from "next/link";
import { FaChevronLeft, FaRegUser } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { IoCartOutline } from "react-icons/io5";
import { Menu as MenuType, Sub } from "@/types/subHeader";
import { FaArrowLeftLong } from "react-icons/fa6";
import SearchDetailMobile from "./searchDetailMobile";
import { Search as SearchType } from "@/types/trendyol";

interface IProps {
  responsiveMenuItems: MenuType[];
  search: SearchType;
}

export default function MobileNavigation({
  responsiveMenuItems,
  search,
}: IProps) {
  const [searchFocus, setSearchFocus] = useState(false);
  const [subs, setSubs] = useState<Sub[] | undefined>();
  const [childsSub, setChildsSubs] = useState<
    Array<
      | {
          link: string;
          text: string;
        }
      | undefined
    >
  >();

  const RenderHeader = () => {
    if (!subs && !childsSub) {
      return <span>منو</span>;
    } else if (subs && childsSub) {
      return (
        <FaArrowLeftLong
          className="text-xl text-gray-600 mt-2"
          onClick={() => setChildsSubs(undefined)}
        />
      );
    } else {
      return (
        <FaArrowLeftLong
          className="text-xl text-gray-600 mt-2"
          onClick={() => setSubs(undefined)}
        />
      );
    }
  };

  const Menu = () => {
    return (
      <div className="flex items-center h-10 justify-between w-full">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <GiHamburgerMenu className="text-2xl cursor-pointer" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] p-0"
              showCloseButton={false}
            >
              <SheetHeader className="relative h-14 border-b flex  items-center justify-between px-6 bg-gray-100">
                <SheetTitle className="!m-0 absolute left-0 px-5 top-2">
                  <RenderHeader />
                </SheetTitle>
                <SheetClose className="rounded-sm opacity-70 hover:opacity-100 absolute right-0 top-1 px-5">
                  <X className="h-7 w-7" />
                </SheetClose>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-6 px-2">
                <ul className="flex flex-col space-y-4 ">
                  {!subs &&
                    responsiveMenuItems.map((item, index) => (
                      <Fragment key={index}>
                        {index > 0 && <hr />}
                        <li
                          onClick={() => {
                            setSubs(item.subs);
                          }}
                          className="text-xs flex items-center justify-between cursor-pointer"
                        >
                          <span>{item.title}</span>
                          <FaChevronLeft className="text-gray-500" />
                        </li>
                      </Fragment>
                    ))}
                  {!childsSub &&
                    subs?.map((item, index) => (
                      <Fragment key={index}>
                        {index > 0 && <hr />}
                        <li
                          onClick={() => {
                            setChildsSubs(item.childs);
                          }}
                          className="text-xs flex items-center justify-between cursor-pointer"
                        >
                          <span>{item.title}</span>
                          <FaChevronLeft className="text-gray-500" />
                        </li>
                      </Fragment>
                    ))}
                  {childsSub?.map((item, index) => (
                    <Fragment key={index}>
                      {index > 0 && <hr />}
                      <Link
                        href={item!.link}
                        className="text-xs flex items-center justify-between cursor-pointer"
                      >
                        <span>{item!.text}</span>
                      </Link>
                    </Fragment>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
          <span>Logo</span>
        </div>
        <div className="flex items-center gap-2">
          <IoCartOutline className="text-2xl" />
          <FaRegUser className="text-xl" />
        </div>
      </div>
    );
  };

  const SearchSection = () => {
    return (
      <div
        onFocus={() => setSearchFocus(true)}
        className="w-full relative transition-all group focus-within:rounded-b-none focus-within:outline focus-within:outline-2 focus-within:shadow focus-within:outline-orange-500 rounded-md"
      >
        <Input
          type="search"
          placeholder="محصول، دسته یا برند مورد نظر خود را تایپ کنید"
          className="pr-10 bg-gray-100 focus-within:shadow-lg focus-within:bg-white border-none focus:!ring-0 focus:!ring-offset-0 text-xs placeholder:text-xs w-full"
        />
        <Search className="absolute right-3 top-2.5 h-5 w-5 text-orange-500" />
        {searchFocus && (
          <SearchDetailMobile
            search={search}
            close={() => setSearchFocus(false)}
          />
        )}
      </div>
    );
  };

  return (
    <div className="flex items-center flex-col md:hidden justify-between w-full my-2">
      <Menu />
      <SearchSection />
    </div>
  );
}
