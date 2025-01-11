import { AccordionContent } from "@/components/ui/accordion";

interface IAccordionSearch {
  title: string;
  index: number;
  setSearch: React.Dispatch<
    React.SetStateAction<
      | {
          keyword: string | undefined;
          index: number | undefined;
        }
      | undefined
    >
  >;
}
const AccordionSearch = ({ title, index, setSearch }: IAccordionSearch) => {
  return (
    <AccordionContent className="text-xs  flex items-center   w-full justify-between">
      <input
        placeholder={`جستجوی ${title}`}
        type="text"
        onChange={(e) => {
          if (e.currentTarget.value) {
            setSearch({
              index,
              keyword: e.currentTarget.value.toString(),
            });
          } else {
            setSearch(undefined);
          }
        }}
        className=" border outline-none px-3 rounded text-[10px] h-8 w-full"
      />
    </AccordionContent>
  );
};

export default AccordionSearch;
