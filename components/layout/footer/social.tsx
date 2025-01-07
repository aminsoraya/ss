import { Footer } from "@/types/footer";
import React from "react";
import { MdSlowMotionVideo } from "react-icons/md";
import { RiLinkedinFill } from "react-icons/ri";
import { TfiTwitter } from "react-icons/tfi";

export default function Social({ social }: Pick<Footer, "social">) {
  const aparat = social?.find(url => url.includes('aparat'));
  const twitter = social?.find(url => url.includes('twitter'));
  const linked = social?.find(url => url.includes('linkedin'));
  const insta = social?.find(url => url.includes('instagram'));


  return (
    <div className="flex items-center h-full text-gray-500 gap-2 px-5">
      {aparat && (
        <a target="_blank"  href={aparat}><MdSlowMotionVideo className="text-3xl" /></a>
      )}
      {twitter && (
        <a target="_blank" href={twitter}><TfiTwitter className="text-3xl" /></a>
      )}
      {linked && (
        <a target="_blank" href={linked}><RiLinkedinFill className="text-3xl" /></a>
      )}
      {insta && (
        <a target="_blank" href={insta}><MdSlowMotionVideo className="text-3xl" /></a>
        
      )}
    </div>
  );
}
