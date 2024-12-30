import React from "react";
import Menu from "./menu";
import Categories from "./categories";
import { Meta } from "@/types";

function SubHeader({ subHeaders }: Pick<Meta, "subHeaders">) {
  return (
    <div className="w-full flex items-center justify-start px-5 gap-5  py-2 bg-subHeader">
      <Menu menus={subHeaders?.menus!} />
      <Categories categories={subHeaders?.categories!} />
    </div>
  );
}

export default SubHeader;
