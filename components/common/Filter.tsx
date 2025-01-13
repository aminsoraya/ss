"use client";
import { useTrendyolContext } from "@/state/context";
import { CategoriesResponse } from "@/types";
import React, {
  Dispatch,
  FC,
  Fragment,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FiFilter } from "react-icons/fi";
import { LuChevronLeft } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import useSWR from "swr";
import { ImSearch } from "react-icons/im";
import useNavigation from "@/hooks/useNavigation";
import { FaAngleRight } from "react-icons/fa";

interface IProps {
  onClick: () => void;
}
export default function Filter({ onClick }: IProps) {
  const { filters } = useTrendyolContext();
  const filtersCount = useMemo(() => {
    let counter = 0;
    if (filters) {
      counter = filters.flatMap((s) => s.values).length;
    }
    return counter;
  }, [filters]);
  return (
    <div
      onClick={onClick}
      className="w-full flex items-center justify-center gap-1"
      dir="rtl"
    >
      <FiFilter className="text-xl text-orange-500" />
      <span className="text-sm text-gray-700">فیلتر</span>
      {filtersCount > 0 && (
        <span className="text-orange-500 text-sm">({filtersCount})</span>
      )}
    </div>
  );
}

// Types
interface Filter {
  key: string;
  values: Array<string> | undefined;
}

// Main Component
export const FilterDrawer = ({
  categoriesRoute,
}: {
  categoriesRoute: string;
}) => {
  const { updateBulkUrl } = useNavigation();
  const { filters } = useTrendyolContext();

  const { showFilters, setShowFilters } = useTrendyolContext();
  const [subFilters, setSubFilters] = useState<
    CategoriesResponse | undefined
  >();

  const passParametersToUrl = () => {
    filters?.forEach((filter) => {
      updateBulkUrl(filter?.key!, filter?.values!);
    });

    setSubFilters(undefined);
  };

  return (
    showFilters && (
      <div className="fixed top-0 w-screen left-0 z-[1000] h-screen bg-gray-50">
        <Header
          onClose={() => setShowFilters(false)}
          subFilter={subFilters}
          onClickBackward={passParametersToUrl}
        />
        <Body
          categoriesRoute={categoriesRoute}
          setSubFilter={setSubFilters}
          subFilter={subFilters}
        />
      </div>
    )
  );
};

// Header Component
const Header: FC<{
  onClose: () => void;
  subFilter: CategoriesResponse | undefined;
  onClickBackward: () => void;
}> = ({ onClose, subFilter, onClickBackward }) => (
  <div className="w-full h-12 flex items-center px-3 text-gray-700 bg-white justify-center">
    <span>فیلتر</span>
    {subFilter ? (
      <FaAngleRight
        className="text-2xl absolute right-2"
        onClick={onClickBackward}
      />
    ) : (
      <MdOutlineClose className="text-2xl absolute right-2" onClick={onClose} />
    )}
  </div>
);

// Body Component
const Body: FC<{
  categoriesRoute: string;
  subFilter: CategoriesResponse | undefined;
  setSubFilter: React.Dispatch<
    React.SetStateAction<CategoriesResponse | undefined>
  >;
}> = ({ categoriesRoute, subFilter, setSubFilter }) => {
  const { data } = useSWR(categoriesRoute, (url: string) =>
    fetch(url).then((r) => r.json())
  );

  const categories = useMemo(
    () => data as CategoriesResponse[] | undefined,
    [data]
  );
  const [keyword, setKeyword] = useState("");

  const filterSubItems = useMemo(() => {
    if (!subFilter || !subFilter.items.searchable)
      return subFilter?.items.items;
    return subFilter.items.items.filter((item) =>
      item.title.includes(keyword.trim())
    );
  }, [keyword, subFilter]);

  return categories ? (
    <div className="w-full h-full bg-gray-50">
      {/* parent */}
      {!subFilter && (
        <FilterList categories={categories} onSelect={setSubFilter} />
      )}

      {/* children */}
      {subFilter && (
        <>
          {subFilter.items.searchable && (
            <FilterSearch
              placeholder={`جستجوی ${subFilter.title}`}
              onSearch={setKeyword}
            />
          )}
          <FilterItems
            items={filterSubItems || []}
            subFilterKey={subFilter.key}
          />
        </>
      )}
    </div>
  ) : (
    <div className="w-full flex justify-center h-12 items-center">Loading</div>
  );
};

// FilterList Component
const FilterList: FC<{
  categories: CategoriesResponse[];
  onSelect: (category: CategoriesResponse) => void;
}> = ({ categories, onSelect }) => {
  const { filters } = useTrendyolContext();
  return (
    <>
      {categories.map(({ items, title, key }, index) => {
        const selectedFilterLength = filters?.find((s) => s.key == key);
        return (
          <Fragment key={key}>
            <hr />
            <div
              onClick={() => onSelect({ items, title, key })}
              className="w-full px-3 h-12 text-xs flex justify-between items-center bg-white"
            >
              <div className="flex items-center gap-x-1">
                <span>{title}</span>
                {selectedFilterLength && (
                  <span className="text-orange-500">
                    ({selectedFilterLength?.values?.length})
                  </span>
                )}
              </div>
              <LuChevronLeft className="text-lg text-orange-500" />
            </div>
            {index === categories.length - 1 && <hr />}
          </Fragment>
        );
      })}
    </>
  );
};

// FilterSearch Component
const FilterSearch: FC<{
  placeholder: string;
  onSearch: (value: string) => void;
}> = ({ placeholder, onSearch }) => (
  <div className="flex items-center gap-2 px-3 h-12 text-xs text-gray-700 bg-white border-t border-b mb-5">
    <ImSearch className="text-xl" />
    <input
      onChange={(e) => onSearch(e.target.value)}
      type="text"
      className="h-full w-full outline-none"
      placeholder={placeholder}
    />
  </div>
);

// FilterItems Component
const FilterItems: FC<{
  items: { title: string; value: string }[];
  subFilterKey: string;
}> = ({ items, subFilterKey }) => {
  const { filters, setFilters } = useTrendyolContext();
  const { getValuesByKey } = useNavigation();
  const modifyValues = (key: string, value: string, checked: boolean) => {
    const findedFilter = filters?.find((s) => s.key == key);

    if (checked) {
      if (!findedFilter) {
        const newFilter: Filter = { key: key, values: [value] };
        setFilters((state) => (state ? [...state!, newFilter] : [newFilter]));
      } else {
        const newFilter: Filter = {
          key: key,
          values: [...findedFilter.values!, value],
        };
        setFilters((state) => [
          ...state?.filter((s) => s.key != key)!,
          newFilter,
        ]);
      }
    } else {
      const newFilter: Filter = {
        key: key,
        values: [...findedFilter!.values!.filter((s) => s != value)],
      };
      setFilters((state) => [
        ...state?.filter((s) => s.key != key)!,
        newFilter,
      ]);
    }
  };

  const filtersFromUrl = getValuesByKey(subFilterKey);
  return (
    <>
      {items.map(({ title, value }, index) => (
        <Fragment key={value}>
          <hr />
          <div className="flex items-center gap-2 px-3 h-12 text-xs text-gray-700 bg-white">
            <input
              value={filtersFromUrl.find((s) => s == value)}
              type="checkbox"
              onChange={(e) =>
                modifyValues(subFilterKey, value, e.target.checked)
              }
              className="accent-amber-500 h-4 w-4"
            />
            <span>{title}</span>
          </div>
          {index === items.length - 1 && <hr />}
        </Fragment>
      ))}
    </>
  );
};
