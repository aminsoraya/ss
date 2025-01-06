import React, { FC, Fragment, ReactNode } from "react";
import Header from "./header/header";
import SubHeader from "./subHeader/subHeader";
import { Meta, TrendyolMeta } from "@/types";
import Footer from "./footer/footer";
import { Header as HeaderType, Routes } from "@/types/header";
import TrendyolHeader from "./header/trendyol/page";
import TrendyolSubHeader from "./subHeader/trendyolSubHeader";
import UsefulKeywordComponent from "@/components/trendyol/usefulKeyword";
import { Container } from "../ui/container";
import BestMarketsAndShoppings from "./footer/bestMarketsAndShopping";
import PopularPages from "./footer/popularPages";

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
            <TrendyolHeader
              {...props.trendoyl.search}
              responsiveMenuItems={props.trendoyl.menus}
            />
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

  const ConditionalyRenderFooter: FC = () => {
    switch (props.pathName) {
      case Routes.Trendyol:
        return (
          props.trendoyl.usefulKeywords && (
            <Container>
              <UsefulKeywordComponent data={props.trendoyl.usefulKeywords} />
              <hr className="my-5"/>
              <div className="grid md:grid-cols-2 grid-cols-1 ">
                <BestMarketsAndShoppings data={props.trendoyl.bestShopMarks} />
                <PopularPages data={props.trendoyl.favouritePages} />
              </div>
            </Container>
          )
        );
      default:
        return <Footer footers={footers} />;
    }
  };

  return (
    <>
      {props.pathName && <ConditionalyRenderHeader />}
      {children}
      {props.pathName && <ConditionalyRenderFooter />}
    </>
  );
}
