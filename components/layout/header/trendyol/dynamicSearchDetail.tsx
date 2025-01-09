import { SearchDetailType } from "@/types/trendyol";
import Link from "next/link";
import React, { useMemo } from "react";

const DynamicSearchDetail = ({
  data,
}: {
  data: SearchDetailType[] | undefined;
}) => {
  let sortItems = useMemo(() => {
    return data?.sort((a, b) => {
      const firstImage = a.image ? 1 : 0;
      const secondImage = b.image ? 1 : 0;

      return firstImage - secondImage;
    });
  }, [data]);

  return sortItems?.map((item, index) => (
    <Link href={item.link} key={index}>
      {index > 0 && <hr />}
      <div
        className="w-full h-12 flex items-center justify-between px-3 text-xs"
        dir="ltr"
      >
        <div className="flex items-center gap-3">
          {item.image && <img src={item.image} className="w-6 h-6" />}
          <span>{item.name}</span>
        </div>
        <span className="text-gray-500">{item.sideNote}</span>
      </div>
    </Link>
  ));
};

export default DynamicSearchDetail;
