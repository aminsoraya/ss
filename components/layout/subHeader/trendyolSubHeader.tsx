"use client"
import { Menu as MenuType } from "@/types/subHeader";
import React from "react";
import Menu from "./menu";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Routes } from "@/types/header";
import { usePathname } from "next/navigation";

interface IProps {
  subHeaders: MenuType[];
}
function TrendyolSubHeader(props: IProps) {
  const pathName = usePathname();
  return (
    <Container
      className={twMerge(
        "w-full h-12 lg:h-8  gap-5  items-center px-2 border-b",
        pathName == Routes.Sr ? "hidden lg:flex" : "flex"
      )}
    >
      <Menu menus={props.subHeaders} />
      {props.subHeaders.map((item, index) => (
        <Link href={""} className="text-xs   " key={index}>
          <span className="hover:text-orange-500">{item.title}</span>
        </Link>
      ))}
    </Container>
  );
}

export default TrendyolSubHeader;
