import { headers } from "next/headers";
import { Header, Service } from "./header";
import { Category, Menu, SubHeader } from "./subHeader";
import { Footer } from "./footer";
import { AmazingOfffer, MostPopular } from "./trendyol";

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


export interface Trendyol{
  mostPopular:MostPopular[]
  amazingOffer:AmazingOfffer[]
}