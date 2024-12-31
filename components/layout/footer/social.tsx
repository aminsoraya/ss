"use client";
import { Footer } from "@/types/footer";
import React from "react";
import { MdSlowMotionVideo } from "react-icons/md";
import { RiLinkedinFill } from "react-icons/ri";
import { TfiTwitter } from "react-icons/tfi";

export default function Social({ social }: Pick<Footer, "social">) {
  const hasAparat = social?.some(url => url.includes('aparat'));
  const hasTwitter = social?.some(url => url.includes('twitter'));
  const hasLinked = social?.some(url => url.includes('linkedin'));
  const hasInsta = social?.some(url => url.includes('instagram'));


  return (
    <div className="flex items-center h-full text-gray-500 gap-3">
      {hasAparat && (
        <MdSlowMotionVideo className="text-3xl" />
      )}
      {hasTwitter && (
        <TfiTwitter className="text-3xl" />
      )}
      {hasLinked && (
        <RiLinkedinFill className="text-3xl" />
      )}
      {hasInsta && (
        <MdSlowMotionVideo className="text-3xl" />
      )}
    </div>
  );
}
