import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AccordionSearch from "./search";
import { CategoriesResponse, CategoriesResponseItem } from "@/types";
import useNavigation from "@/hooks/useNavigation";

interface IProps {
  setSearch: React.Dispatch<
    React.SetStateAction<
      | {
          keyword: string | undefined;
          index: number | undefined;
        }
      | undefined
    >
  >;
  data: CategoriesResponse[];
  filteredItems: CategoriesResponseItem[] | undefined;
}

export default function Content(props: IProps) {
  const { setSearch, data, filteredItems } = props;
  const { updateUrl, getValuesByKey } = useNavigation();

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      onClick={() => setSearch(undefined)}
    >
      {data.map(({ items, title, key }, index) => {
        const [values] = getValuesByKey(key);
        const splittedValues = values?.split(",") ?? [];

        return (
          <AccordionItem value={index.toString()} key={index}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionSearch
              index={index}
              setSearch={setSearch}
              title={title}
            />
            {(filteredItems ?? items.items).map((ch, chIndex) => (
              <AccordionContent
                key={chIndex}
                className="text-xs  flex items-center   w-full justify-between"
              >
                <span className="text-gray-700">{ch.title}</span>
                <input
                  onClick={(e) => {
                    updateUrl(
                      key,
                      ch.value,
                      e.currentTarget.checked ? "add" : "rmv"
                    );
                  }}
                  checked={splittedValues.includes(ch.value.toString())}
                  type="checkbox"
                  className="accent-amber-500 w-4 h-4"
                />
              </AccordionContent>
            ))}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
