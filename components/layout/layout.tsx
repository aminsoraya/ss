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
import About from "./footer/about";
import FooterResources from "./footer/footerResources";

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
      case Routes.Sr:
        return (
          <Fragment>
            <TrendyolHeader
              {...props.trendoyl.search}
              menuItems={props.trendoyl.menus}
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
      case Routes.Sr:
        return (
          props.trendoyl.usefulKeywords && (
            <Fragment>
              <Container className="md:p-6 p-0">
                <div className="w-full px-2 ">
                  <UsefulKeywordComponent
                    data={props.trendoyl.usefulKeywords}
                  />
                  <hr className="my-5" />
                  <About about={props.trendoyl.about} />
                  <hr />
                  <div className="grid md:grid-cols-2 grid-cols-1 py-5">
                    <BestMarketsAndShoppings
                      data={props.trendoyl.bestShopMarks}
                    />
                    <PopularPages data={props.trendoyl.favouritePages} />
                  </div>
                </div>
              </Container>
              <div className="w-full bg-gray-100 h-52 overflow-hidden">
                <Container>
                  <FooterResources />
                </Container>
                <div className="w-full h-12 flex items-center bg-black text-[12px] justify-center text-white">
                  <span>تمامی حقوق سایت محفوظ است</span>
                </div>
              </div>
            </Fragment>
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
