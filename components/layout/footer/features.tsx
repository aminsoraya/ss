import { footerFeatureItems } from "@/service/data/static";
import React from "react";

export default function Features() {
  return (
    <div className="w-full h-20  flex gap-10 text-sm text-gray-400 items-center justify-start px-5 border-t border-b">
      {footerFeatureItems.map(({ icon: Icon, text }, index) => {
        return (
          <div className="flex items-center gap-2">
            {<Icon className="text-2xl" />}
            <span className="text-xs">{text}</span>
          </div>
        );
      })}
    </div>
  );
}
