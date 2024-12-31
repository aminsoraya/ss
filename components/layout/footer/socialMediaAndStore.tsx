import { Footer } from "@/types/footer";
import React from "react";
import Social from "./social";

export default function SocialMediaAndStore(
  props: Pick<Footer, "social" | "appsDownload">
) {
  const { appsDownload, social } = props;
  return (
    <div className="w-full h-20 px-5 ">
      <div className="w-full bg-gray-200 h-full rounded-lg">
        <Social social={social}/>
      </div>
    </div>
  );
}
