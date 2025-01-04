"use client";
import React, { FC, ReactNode } from "react";
import Header from "./header/header";
import SubHeader from "./subHeader/subHeader";
import { Meta } from "@/types";
import Footer from "./footer/footer";
import { usePathname } from "next/navigation";
import { Routes } from "@/types/header";
import TrendyolHeader from "./header/trendyol/page";

interface IProps extends Meta {
  children: ReactNode;
}
export default function Layout(props: IProps) {
  const { children, headers, subHeaders, footers } = props;
  const router = usePathname();

  const ConditionalyRenderHeader: FC = () => {
    switch (router) {
      case Routes.Trendyol:
        return <TrendyolHeader />;
      default:
        return (
          <>
            <Header services={headers.services} />
            <SubHeader subHeaders={subHeaders} />
          </>
        );
    }
  };
  return (
    <>
      <ConditionalyRenderHeader />
      {children}
      <Footer footers={footers} />
    </>
  );
}
