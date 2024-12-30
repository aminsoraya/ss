"use client";
import React, { ReactNode } from "react";
import Header from "./header/header";
import { Service } from "@/types/header";

interface IProps {
  children: ReactNode;
  services: Service[];
}
export default function Layout(props: IProps) {
  const { children, services } = props;
  return (
    <>
      <Header {...services} />
      {children}
    </>
  );
}
