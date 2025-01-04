"use client";
import { Menu as MenuType } from "@/types/subHeader";
import React from "react";
import Menu from "./menu";
import { Container } from "@/components/ui/container";
import Link from "next/link";

interface IProps {
  subHeaders: MenuType[];
}
function TrendyolSubHeader(props: IProps) {
  return (
    <Container className="w-full h-8 flex gap-5  items-center px-2">
      <Menu menus={props.subHeaders} />
      {props.subHeaders.map((item, index) => (
        <Link href={""} className="text-xs text-gray-600 " key={index}>
          {item.title}
        </Link>
      ))}
    </Container>
  );
}

export default TrendyolSubHeader;
