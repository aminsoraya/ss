"use client";
import { BatchLink } from "@/types/trendyol";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  list: Pick<BatchLink, "data">;
}

export default function BatchLinksDetail({ list }: IProps) {
  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 my-3">
        {list.data.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="block aspect-video relative"
          >
            <Image
              src={item.img}
              alt=""
              fill
              sizes="(max-width: 668px) 70vw, 33vw"
              className="object-cover rounded-lg"
              priority={index < 6}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
