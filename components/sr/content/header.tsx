"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BiSortAlt2 } from "react-icons/bi";
import { trendyolSortOptions } from "@/service/data/static";
import { TrendyolSorts } from "@/types/trendyol";
import { FC, Fragment, useEffect, useMemo, useState } from "react";
import useNavigation from "@/hooks/useNavigation";
import { FaChevronLeft } from "react-icons/fa6";
import Link from "next/link";
import Filter from "@/components/common/Filter";
import Sort from "@/components/common/Sort";
import { useTrendyolContext } from "@/state/context";

interface IProps {
  countAll: number;
  title: string;
}
const Header = ({ countAll, title }: IProps) => {
  const { setShowSort } = useTrendyolContext();
  const [itemSelected, setItemSelected] = useState<
    { text: string; value: TrendyolSorts } | undefined
  >();

  const { simpleUpdateUrl, getValuesByKey } = useNavigation();
  const sort = getValuesByKey("sort").at(0);

  useEffect(() => {
    if (sort) {
      const sortItem = trendyolSortOptions.find((s) => s.value == sort);
      if (sortItem) {
        setItemSelected(sortItem);
      }
    }
  }, [sort]);

  useEffect(() => {
    if (itemSelected) {
      simpleUpdateUrl("sort", itemSelected.value);
    }
  }, [itemSelected]);

  const DesktopRender: FC = () => (
    <div className="h-12 px-3  flex items-center justify-between ">
      <span dir="ltr">
        {`${countAll} تعداد کل نتایح`} {`"${title}"`}
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none border px-3 text-xs  flex  justify-between items-center rounded-md   h-10">
          <span>{`${itemSelected?.text ?? "مرتب سازی"}`}</span>
          <BiSortAlt2 className="text-orange-500 text-2xl mr-4 " />
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" !text-xs text-gray-600 text-right w-full">
          {trendyolSortOptions.map((item, index) => (
            <DropdownMenuItem
              key={index}
              dir="rtl"
              className="text-xs w-full"
              onClick={() =>
                setItemSelected({
                  text: item.text,
                  value: item.value,
                })
              }
            >
              {item.text}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );

  const SmallRender: FC = () => {
    const {simpleGetValueByKey}=useNavigation()

    const sortingkey=simpleGetValueByKey("sort")
    const sortingKeyAlias=useMemo(()=>{
      if(sortingkey){
        const sortAlias=trendyolSortOptions.find(s=>s.value==sortingkey)
        return sortAlias?.text
      }
    },[sortingkey])

    return (
      <Fragment>
        <div className="w-full flex items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <span>{title}</span>
            <span dir="ltr" className="text-xs text-gray-400">
              {countAll} تعداد کل نتایج
            </span>
          </div>
          <Link href="/trendyol">
            <FaChevronLeft className="absolute left-5 text-2xl" />
          </Link>
        </div>
        <div
          className=" h-10 grid grid-cols-2 w-full border divide-x mt-3"
          dir="ltr"
        >
          <Sort onClick={() => setShowSort(true)} sortingText={sortingKeyAlias} />
          <Filter onClick={() => {}} />
        </div>
      </Fragment>
    );
  };
  return (
    <Fragment>
      <section className="hidden lg:block">
        <DesktopRender />
      </section>
      <section className="block lg:hidden">
        <SmallRender />
      </section>
    </Fragment>
  );
};

export default Header;
