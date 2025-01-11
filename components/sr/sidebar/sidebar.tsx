"use client";
import { CategoriesResponse } from "@/types";
import React, { FC, useEffect, useMemo, useState } from "react";

import { useSearchParams } from "next/navigation";
import SidebarContent from "./content";

interface IProps {
  data: CategoriesResponse[];
}
export default function Sidebar({ data }: IProps) {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState<
    { keyword: string | undefined; index: number | undefined } | undefined
  >();

  const filteredItems = useMemo(() => {
    if (search) {
      const itemsByIndex = data.at(search?.index!)?.items;

      return itemsByIndex?.items.filter(
        (s) => s.title.indexOf(search?.keyword!) > -1
      );
    }
  }, [search]);

  useEffect(() => {
    console.log({ searchParams });
  }, [searchParams]);

  return (
    <aside className="  w-[300px] h-[calc(100vh-100px)] px-3 py-3 text-xs fixed border-l">
      <SidebarContent
        setSearch={setSearch}
        data={data}
        filteredItems={filteredItems}
        search={search}
      />
    </aside>
  );
}
