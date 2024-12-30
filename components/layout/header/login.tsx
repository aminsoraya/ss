import React from "react";
import { FaRegUser } from "react-icons/fa6";

export default function Login() {
  return (
    <div className="flex items-center gap-2 text-gray-50">
      <FaRegUser  className="text-2xl"/>
      <span className="text-sm">ورود یا عضویت</span>
    </div>
  );
}
