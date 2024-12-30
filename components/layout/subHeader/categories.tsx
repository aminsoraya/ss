import { Category } from "@/types/subHeader";
import React from "react";

interface IProps {
  categories: Category[];
}
export default function Categories({ categories }: IProps) {
  return <div className="text-gray-50">Categories</div>;
}
