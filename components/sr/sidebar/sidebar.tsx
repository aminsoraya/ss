"use client";
import { CategoriesResponse } from "@/types";
import React, { FC, useMemo, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AccordionSearch from "./search";

interface IProps {
  data: CategoriesResponse[];
}
export default function Sidebar({ data }: IProps) {
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

  return (
    <aside className="  w-[300px] h-[calc(100vh-100px)] px-3 py-3 text-xs fixed border-l">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        onClick={() => setSearch(undefined)}
      >
        {data.map(({ items, title }, index) => (
          <AccordionItem value={index.toString()} key={index}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionSearch
              index={index}
              setSearch={setSearch}
              title={title}
            />
            {(search! ? filteredItems! : items.items).map((ch, chIndex) => (
              <AccordionContent
                key={chIndex}
                className="text-xs  flex items-center   w-full justify-between"
              >
                <span className="text-gray-700">{ch.title}</span>
                <input type="checkbox" className="accent-amber-500 w-4 h-4" />
              </AccordionContent>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </aside>
  );
}
