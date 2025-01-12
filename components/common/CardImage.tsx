"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { Card } from "@/types/trendyol";
import { twMerge } from "tailwind-merge";

const CardImage: FC<Pick<Card, "img">> = ({ img }) => {
  const [imgIndex, setImgIndex] = useState<number>(0);

  return Array.isArray(img) ? (
    <div className="flex relative w-full h-64">
      <Image src={img.at(imgIndex)!} alt="" fill className="object-cover" />
      <div className="absolute bottom-2 right-[50%] translate-x-[50%] bg-gray-400 rounded-lg px-1 h-3 flex items-center justify-center gap-1">
        {(img as string[]).map((_, index) => (
          <span
            key={index}
            className={twMerge(
              "bg-gray-50 h-1 w-1 rounded-full",
              index == imgIndex ? "bg-gray-800" : null
            )}
          ></span>
        ))}
      </div>
      <div
        className={twMerge(
          "absolute top-0 right-0     w-full h-full flex items-center justify-center gap-1",
          `grid-cols-${img.length}`
        )}
      >
        {(img as string[]).map((_, index) => (
          <div
            key={index}
            onMouseOver={() => setImgIndex(index)}
            className={`  h-full w-full `}
          ></div>
        ))}
      </div>
    </div>
  ) : (
    <Image src={img as string} alt="" fill className="object-cover" />
  );
};

export default CardImage;
