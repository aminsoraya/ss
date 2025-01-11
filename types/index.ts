import { headers } from "next/headers";
import { Header, Service } from "./header";
import { Menu, SubHeader } from "./subHeader";
import { BestShopMark, FavouritePage, Footer } from "./footer";
import {
  AmazingOffer,
  BatchLink,
  BrandLink,
  Category,
  MostPopular,
  MostSellingProduct,
  PopularCategory,
  Search,
  UsefulKeyword,
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
  usefulKeywords: UsefulKeyword[];
  bestShopMarks: BestShopMark[];
  favouritePages: FavouritePage[];
  about: string;
}
export interface TrendyolMain {
  categories: Category[];
  mostPopular: MostPopular[];
  amazingOffer: AmazingOffer[];
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

export type CategoriesResponseItem = {
  title: string;
  value: string;
};
export interface CategoriesResponse {
  key: string;
  title: string;
  items: {
    searchable?: boolean;
    items: Array<CategoriesResponseItem>;
  };
}
