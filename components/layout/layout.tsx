"use client";
import React, { ReactNode } from "react";
import Header from "./header/header";
import SubHeader from "./subHeader/subHeader";
import { Meta } from "@/types";

interface IProps extends Meta {
  children: ReactNode;
}
export default function Layout(props: IProps) {
  const { children, headers, subHeaders } = props;
  return (
    <>
      <Header services={headers.services} />
      <SubHeader subHeaders={subHeaders} />
      {children}
    </>
  );
}
