import React, { FC, Fragment, ReactNode } from "react";
import { Meta, TrendyolMeta } from "@/types";
import TrendyolHeader from "./header/trendyol/page";
import TrendyolSubHeader from "./subHeader/trendyolSubHeader";
import UsefulKeywordComponent from "@/components/trendyol/usefulKeyword";
import { Container } from "../ui/container";
import BestMarketsAndShoppings from "./footer/bestMarketsAndShopping";
import PopularPages from "./footer/popularPages";
import About from "./footer/about";
import FooterResources from "./footer/footerResources";

interface IProps {
  children: ReactNode;

  trendoyl: TrendyolMeta;
}
export default function Layout(props: IProps) {
  const { children, trendoyl } = props;

  const Header: FC = () => {
    return (
      <Fragment>
        <TrendyolHeader {...props.trendoyl.search} menuItems={trendoyl.menus} />

        <TrendyolSubHeader subHeaders={trendoyl.menus} />
      </Fragment>
    );
  };

  const Footer: FC = () => {
    return (
      trendoyl.usefulKeywords && (
        <Fragment>
          <Container className="md:p-6 p-0">
            <div className="w-full px-2 ">
              <UsefulKeywordComponent data={trendoyl.usefulKeywords} />
              <hr className="my-5" />
              <About about={trendoyl.about} />
              <hr />
              <div className="grid md:grid-cols-2 grid-cols-1 py-5">
                <BestMarketsAndShoppings data={trendoyl.bestShopMarks} />
                <PopularPages data={trendoyl.favouritePages} />
              </div>
            </div>
          </Container>
          <div className="w-full bg-gray-100 h-52 overflow-hidden hidden lg:block">
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
  };

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
