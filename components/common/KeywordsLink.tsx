import React, { ReactNode } from "react";

interface IProps<T> {
  data: T[];
  render: (val: T, index: number) => ReactNode;
  title: string;
}
export default function KeywordsLink<T>({ data, render, title }: IProps<T>) {
  return (
    <div className="w-full flex flex-col">
      <span className="text-xs  md:text-sm border-b md:border-none  h-8 flex items-center">{title}</span>
      <div className="w-full grid grid-cols-3 gap-3 py-5">
        {data.map((item, index) => render(item, index))}
      </div>
    </div>
  );
}
