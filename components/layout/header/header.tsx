import React from "react";
import Services from "./services";
import { Service } from "@/types/header";

function Header(props: Service[]) {
  return (
    <div className="bg-header">
      <div className="w-full flex items-center justify-between px-5 text-[11px] py-2">
        <Services {...props} />
        <div className="flex items-center">
          <a href="" className="text-gray-50">
            نصب افزونه سایت
          </a>
          <hr className="border mx-2 w-[1px] h-4 border-gray-400" />
          <span className="text-gray-400">ارسال رایگان به سراسر کشور</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
