"use client";
import React, { ReactNode } from "react";
import Header from "./header/header";
import SubHeader from "./subHeader/subHeader";
import { Meta } from "@/types";
import Footer from "./footer/footer";

interface IProps extends Meta {
  children: ReactNode;
}
export default function Layout(props: IProps) {
  const { children, headers, subHeaders, footers } = props;
  return (
    <>
      <Header services={headers.services} />
      <SubHeader subHeaders={subHeaders} />
      {children}
      <Footer footers={footers} />
    </>
  );
}
