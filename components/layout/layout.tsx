"use client";
import React, { ReactNode } from "react";
import Header from "./header/header";
import { Service } from "@/types/header";
import SubHeader from "./subHeader/subHeader";
import { Meta } from "@/types";

interface IProps extends Meta {
  children: ReactNode;
}
export default function Layout(props: IProps) {
  const { children, headers, subHeaders } = props;
  return (
    <>
      <Header {...headers.Services} />
      <SubHeader />
      {children}
    </>
  );
}
