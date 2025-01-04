import React, { FC, Fragment, ReactNode } from "react";
import Header from "./header/header";
import SubHeader from "./subHeader/subHeader";
import { Meta, Trendyol } from "@/types";
import Footer from "./footer/footer";
import { Header as HeaderType, Routes, Service } from "@/types/header";
import TrendyolHeader from "./header/trendyol/page";
import TrendyolSubHeader from "./subHeader/trendyolSubHeader";

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
        return (
          <Fragment>
            <TrendyolHeader {...props.trendoyl.initial.search!} />
            <TrendyolSubHeader subHeaders={props.trendoyl.initial.menus} />
          </Fragment>
        );
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
