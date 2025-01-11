import React from "react";

export default function Content() {
  return <div className="  w-full px-3 py-1">
    <Header/>
  </div>;
}

const Header = () => {
  return (
    <div className="h-12 bg-gray-200 flex items-center justify-between ">
      <span>تعداد نتایج</span>
      <span>مرتب سازی</span>
    </div>
  );
};
