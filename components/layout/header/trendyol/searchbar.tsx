"use client";
import SearchDetail from "./desktopInitialSerachDetail";
import { SearchDetailType, Search as SearchType } from "@/types/trendyol";
import useOutsideClick from "@/hooks/useOutSideClickDetector";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { useSearch } from "@/hooks/useSearch";

const SearchBar: React.FC<
  SearchType & { onFocusChange: (state: boolean) => void; searchFocus: boolean }
> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => {
    props.onFocusChange(false);
  });

  const [searchKeyword, setSearchKeyword] = useState<string | undefined>();
  const searchResults = useSearch<SearchDetailType[]>(searchKeyword!) ?? [];

  const checkedData = useMemo(() => {
    if (searchKeyword && searchKeyword.trim() != "") {
      return searchResults;
    }
    return [];
  }, [searchResults,searchKeyword]);

  return (
    <div
      className="hidden md:flex relative flex-1 max-w-xl"
      onFocus={() => props.onFocusChange(true)}
    >
      <div
        ref={ref}
        className="w-full relative transition-all group focus-within:rounded-b-none focus-within:outline focus-within:outline-2 focus-within:shadow focus-within:outline-orange-500 rounded-md"
      >
        <Input
          onChange={(e) => setSearchKeyword(e.currentTarget.value)}
          type="search"
          placeholder="محصول، دسته یا برند مورد نظر خود را تایپ کنید"
          className="pr-10 bg-gray-100 focus-within:shadow-lg focus-within:bg-white border-none focus:!ring-0 focus:!ring-offset-0 text-xs placeholder:text-xs w-full"
        />
        <Search className="absolute right-3 top-2.5 h-5 w-5 text-orange-500" />
        {props.searchFocus && (
          <SearchDetail {...props} searchResults={checkedData} />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
