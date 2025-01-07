import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { RiTwitterXLine } from "react-icons/ri";

export default function FooterResources() {
  return (
    <div className="w-full grid grid-cols-5 py-5">
      <div>
        <ul className="flex flex-col">
          <li className="text-gray-700 h-8 flex items-center">ترندویل</li>
          <li className="text-[11px]  text-gray-600 h-8 items-center flex">
            ما کی هستیم
          </li>
          <li className="text-[11px]  text-gray-600 h-8 items-center flex">
            شغلی
          </li>
          <li className="text-[11px]  text-gray-600 h-8 items-center flex">
            پایداری
          </li>
          <li className="text-[11px]  text-gray-600 h-8 items-center flex">
            ارتباط
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col">
          <li className="text-gray-700 h-8 flex items-center">ترندویل</li>
          <li className="text-[11px]  text-gray-600 h-8 items-center flex">
            ما کی هستیم
          </li>
          <li className="text-[11px]  text-gray-600 h-8 items-center flex">
            شغلی
          </li>
          <li className="text-[11px]  text-gray-600 h-8 items-center flex">
            پایداری
          </li>
          <li className="text-[11px]  text-gray-600 h-8 items-center flex">
            ارتباط
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col">
          <li className="text-gray-700 h-8 flex items-center">ترندویل</li>
          <li className="text-[11px]  text-gray-600 h-8 items-center flex">
            ما کی هستیم
          </li>
          <li className="text-[11px]  text-gray-600 h-8 items-center flex">
            شغلی
          </li>
          <li className="text-[11px]  text-gray-600 h-8 items-center flex">
            پایداری
          </li>
          <li className="text-[11px]  text-gray-600 h-8 items-center flex">
            ارتباط
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col">
          <li className="text-gray-700 h-8 flex items-center">ترندویل</li>
          <li className="text-[11px]  text-gray-600 h-8 items-center flex">
            ما کی هستیم
          </li>
          <li className="text-[11px]  text-gray-600 h-8 items-center flex">
            شغلی
          </li>
          <li className="text-[11px]  text-gray-600 h-8 items-center flex">
            پایداری
          </li>
          <li className="text-[11px]  text-gray-600 h-8 items-center flex">
            ارتباط
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <span>شبکه های اجتماعی</span>
        <div className="flex items-center gap-3 my-5">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <FaFacebookF className="text-xl text-white" />
          </div>
          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
            <GrInstagram className="text-xl text-white" />
          </div>
          <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
            <AiFillYoutube className="text-xl text-white" />
          </div>
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <RiTwitterXLine className="text-xl text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
