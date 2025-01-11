import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BiSortAlt2 } from "react-icons/bi";
import { trendyolSortOptions } from "@/service/data/static";
import { TrendyolSorts } from "@/types/trendyol";
import { useEffect, useMemo, useState } from "react";
import useNavigation from "@/hooks/useNavigation";

const Header = () => {
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

  return (
    <div className="h-12   flex items-center justify-between ">
      <span>تعداد نتایج</span>
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
};

export default Header;
