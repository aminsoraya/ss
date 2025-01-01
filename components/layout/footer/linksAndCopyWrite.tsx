import React from "react";
import Links from "./links";
import CopyWrite from "./copyWrite";

export default function LinksAndCopyWrite() {
  return (
    <div className="flex w-full items-center justify-between px-5 border-t h-12 bg-gray-300">
      <Links />
      <CopyWrite/>
    </div>
  );
}
