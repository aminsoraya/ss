import { CategoriesResponse } from "@/types";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface IProps {
  data: CategoriesResponse[];
}
export default function Sidebar({ data }: IProps) {
  return (
    <aside className="  w-[300px] h-[calc(100vh-100px)] px-3 py-3 text-xs fixed border-l">
      <Accordion type="single" collapsible className="w-full">
        {data.map((item, index) => (
          <AccordionItem value={index.toString()} key={index}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            {item.items.map((ch, chIndex) => (
              <AccordionContent
                key={chIndex}
                className="text-xs  flex items-center   w-full justify-between"
              >
                <span className="text-gray-700">{ch.title}</span>
                <input
                  type="checkbox"
                  checked
                  className="accent-amber-500 w-4 h-4"
                />
              </AccordionContent>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </aside>
  );
}
