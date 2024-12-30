import React from "react";
import Services from "./services";
import { Header, Service } from "@/types/header";
import Login from "./login";
import Cart from "./cart";
import Search from "./search";
import Logo from "./logo";

export default function HeaderComponent(props: Header) {
  return (
    <div className="bg-header">
      <div className="w-full flex items-center justify-between px-5 text-[11px] py-2">
        <Services services={props.services} />
        <div className="flex items-center">
          <a href="" className="text-gray-50">
            نصب افزونه سایت
          </a>
          <hr className="border mx-2 w-[1px] h-4 border-gray-400" />
          <span className="text-gray-400">ارسال رایگان به سراسر کشور</span>
        </div>
      </div>
      <div className="w-full flex items-center justify-start px-5 gap-5  py-2">
        <div className="w-1/12">
          <Login />
        </div>
        <div className="w-1/12">
          <Cart />
        </div>
        <div className="w-8/12">
          <Search />
        </div>
        <div className="w-1/12">
          <Logo />
        </div>
      </div>
    </div>
  );
}
