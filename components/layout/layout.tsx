import React, { FC, Fragment, ReactNode } from "react";
import Header from "./header/header";
import SubHeader from "./subHeader/subHeader";
import { Meta, TrendyolMeta } from "@/types";
import Footer from "./footer/footer";
import { Header as HeaderType, Routes } from "@/types/header";
import TrendyolHeader from "./header/trendyol/page";
import TrendyolSubHeader from "./subHeader/trendyolSubHeader";

interface IProps extends Meta {
  children: ReactNode;
  pathName: string;
  trendoyl: TrendyolMeta;
}
export default function Layout(props: IProps) {
  const { children, headers, subHeaders, footers } = props;

  const ConditionalyRenderHeader: FC = () => {
    switch (props.pathName) {
      case Routes.Trendyol:
        return (
          <Fragment>
            <TrendyolHeader {...props.trendoyl.search} />
            <TrendyolSubHeader subHeaders={props.trendoyl.menus} />
          </Fragment>
        );
      default:
        return (
          <Fragment>
            <Header services={(headers as HeaderType).services} />
            <SubHeader subHeaders={subHeaders} />
          </Fragment>
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
