"use client"
import { Footer } from "@/types/footer";
import localImage from "@/utils/localImage";
import React from "react";

export default function Social({ social }: Pick<Footer, "social">) {

    console.log("social",{img:localImage(social.at(1)!)})
  return (
    <div className="w-full flex items-center h-full">
      {social.map((item, index) => (
        <img src={localImage(item)} key={index} className="w-24 h-12" alt="sdgdgd" />
      ))}
    </div>
  );
}
