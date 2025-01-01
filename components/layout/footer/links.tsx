import { footerLinks } from "@/service/data/static";
import Link from "next/link";
import React from "react";

export default function Links() {
  return (
    <ul className="flex items-center   text-xs text-gray-600 gap-2 justify-center">
      {footerLinks.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="text-gray-400">|</span>}
          <li>
            <Link href={item.link}>{item.text}</Link>
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
}
