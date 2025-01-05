import { headers } from "next/headers";
import { Header, Service } from "./header";
import { Category, Menu, SubHeader } from "./subHeader";
import { Footer } from "./footer";
import {
  AmazingOfffer,
  BatchLink,
  BrandLink,
  MostPopular,
  MostSellingProduct,
  PopularCategory,
  Search,
  UsefulProduct,
} from "./trendyol";
import { ReactNode } from "react";

export interface Meta {
  headers: Header;
  subHeaders: SubHeader;
  footers: Footer;
}

export const weekDays = {
  sat: "شنبه",
  sun: "یک شنبه",
  mon: "دوشنبه",
  tue: "سه شنبه",
  wed: "چهارشنبه",
  thu: "پنج شنبه",
  fri: "جمعه",
};

export interface TrendyolMeta {
  search: Search;
  menus: Menu[];
}
export interface TrendyolMain {
  mostPopular: MostPopular[];
  amazingOffer: AmazingOfffer[];
  brandsLink: BrandLink[];
  popularCategories: PopularCategory[];
  mostSellingProducts: MostSellingProduct[];
  usefulProducts: UsefulProduct[];
  batchLinks: BatchLink;
}

export interface ProductCarouselProps<T> {
  data: T[];
  title: ReactNode;
  backgroundImage?: string;
  renderItem: (item: T) => React.ReactNode;
  additionalElement?: ReactNode;
}
