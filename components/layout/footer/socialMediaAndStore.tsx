import { Footer } from "@/types/footer";
import React from "react";
import Social from "./social";
import Store from "./store";

export default function SocialMediaAndStore(
  props: Pick<Footer, "social" | "appsDownload">
) {
  const { appsDownload, social } = props;

  return (
    <div className="w-full h-20 px-5 ">
      <div className="w-full    h-full rounded-lg flex justify-between items-center bg-gray-200">
        <Store appsDownload={appsDownload!} />
        <Social social={social} />
      </div>
    </div>
  );
}
