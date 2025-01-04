import React, { FC, ReactNode } from "react";
import Header from "./header/header";
import SubHeader from "./subHeader/subHeader";
import { Meta, Trendyol } from "@/types";
import Footer from "./footer/footer";
import { Header as HeaderType, Routes, Service } from "@/types/header";
import TrendyolHeader from "./header/trendyol/page";

interface IProps extends Meta {
  children: ReactNode;
  pathName: string;
  trendoyl: Trendyol;
}
export default function Layout(props: IProps) {
  const { children, headers, subHeaders, footers } = props;

  const ConditionalyRenderHeader: FC = () => {
    switch (props.pathName) {
      case Routes.Trendyol:
        return <TrendyolHeader {...props.trendoyl.initial.search!} />;
      default:
        return (
          <>
            <Header services={(headers as HeaderType).services} />
            <SubHeader subHeaders={subHeaders} />
          </>
        );
    }
  };
  return (
    <>
      {props.pathName && <ConditionalyRenderHeader />}
      {children}
      <Footer footers={footers} />
    </>
  );
}
