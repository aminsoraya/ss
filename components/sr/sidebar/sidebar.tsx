"use client";
import { CategoriesResponse } from "@/types";
import React, { useMemo, useState } from "react";
import SidebarContent from "./content";
import useSWR from "swr";

interface IProps {
  route: string;
}

export default function Sidebar({ route }: IProps) {
  const { data, error } = useSWR(route, (url: string) =>
    fetch(url).then((r) => r.json())
  );

  const [search, setSearch] = useState<
    { keyword: string | undefined; index: number | undefined } | undefined
  >();

  const filteredItems = useMemo(() => {
    if (search && data) {
      const itemsByIndex = (data as CategoriesResponse[]).at(
        search?.index!
      )?.items;

      return (
        itemsByIndex?.items.filter(
          (s) => s.title.indexOf(search?.keyword!) > -1
        ) || []
      );
    }
  }, [search, data]);

  return (
    <aside className="w-[300px] h-[calc(100vh-100px)] px-3 py-3 text-xs fixed border-l">
      {data && (
        <SidebarContent
          setSearch={setSearch}
          data={data}
          filteredItems={filteredItems!}
        />
      )}
    </aside>
  );
}
