import React from "react";

interface IProps {
  about: string;
}
export default function About({ about }: IProps) {
  return (
    <div
      className="px-5 py-3 w-full text-sm  leading-9 text-gray-500"
      dangerouslySetInnerHTML={{ __html: about }}
    >
      
    </div>
  );
}
