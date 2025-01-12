"use client";
import { useTrendyolContext } from "@/state/context";
import { CategoriesResponse } from "@/types";
import React, { FC, Fragment, ReactNode, useEffect, useMemo } from "react";
import { FiFilter } from "react-icons/fi";
import { LuChevronLeft } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import useSWR from "swr";

interface IProps {
  onClick: () => void;
}
export default function Filter({ onClick }: IProps) {
  return (
    <div
      onClick={onClick}
      className="w-full flex items-center justify-center gap-1"
      dir="rtl"
    >
      <FiFilter className="text-xl text-orange-500" />
      <span className="text-sm text-gray-700">فیلتر</span>
      <span className="text-orange-500 text-sm">(2)</span>
    </div>
  );
}

export const FilterDrawer = ({
  categoriesRoute,
}: {
  categoriesRoute: string;
}) => {
  const { showFilters, setShowFilters } = useTrendyolContext();

  const Main = ({ children }: { children: ReactNode }) => (
    <div className="fixed top-0 w-screen left-0 z-[1000] h-screen bg-gray-50">
      {children}
    </div>
  );

  const Header: FC = () => (
    <div className="w-full h-12 flex items-center px-3 text-gray-700 bg-white justify-center">
      <span className="">فیلتر</span>
      <MdOutlineClose
        className="text-2xl absolute right-2 "
        onClick={() => setShowFilters(false)}
      />
    </div>
  );

  const Body = () => {
    const { data, error } = useSWR(categoriesRoute, (url: string) =>
      fetch(url).then((r) => r.json())
    );

    const convertedData = useMemo(() => {
      if (data) {
        return data as CategoriesResponse[];
      }
    }, [data]);

    return convertedData ? (
      <div className="w-full h-full bg-white">
        {convertedData.map((item, index) => (
          <Fragment>
            <hr />
            <div
              key={index}
              className="w-full  px-3 h-12 text-xs justify-between flex items-center"
            >
              <span>{item.title}</span>
              <LuChevronLeft className="text-lg text-orange-500" />
            </div>
            {index==convertedData.length-1&&<hr />}
          </Fragment>
        ))}
      </div>
    ) : (
      <div className="w-full flex justify-center h-12 items-center">
        Loading
      </div>
    );
  };

  return (
    showFilters && (
      <Main>
        <Header />
        <Body />
      </Main>
    )
  );
};
