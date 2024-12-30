import React from "react";
import Menu from "./menu";
import Categories from "./categories";

function SubHeader() {
  return (
    <div className="w-full flex items-center justify-start px-5 gap-5  py-2 bg-subHeader">
      <Menu />
      <Categories />
    </div>
  );
}

export default SubHeader;
