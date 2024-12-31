import localImage from "@/utils/localImage";
import React from "react";

interface IProps {
  appsDownload: string[];
}
export default function Store({ appsDownload }: IProps) {
  return (
    <div className="flex items-center gap-5  h-full">
      {appsDownload.map((item: string, index) => (
        <a href={item} target="_blank" key={index} >
          <img src={localImage(item)} className="h-10" />
        </a>
      ))}
    </div>
  );
}
