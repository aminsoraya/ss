import { Search as TrendyolHeader } from "./trendyol";

export type Service = {
  link: string;
  text: string;
};

export type Header = {
  services: Service[];
};

export enum Routes {
  Trendyol = "/trendyol",
  Amazon = "/amazon",
}
