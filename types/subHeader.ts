import { IconType } from "react-icons";

export type Sub = {
  title: string;
  childs: Array<{
    link: string;
    text: string;
  }>;
};

export type Menu = {
  title: string;
  icon: IconType;
  subs: Sub[];
};

export type Category = {
  img?: string;
  text: string;
  icon?: IconType;
  link: string;
  dir: "rtl" | "ltr";
};

export type SubHeader = {
  menus: Menu[];
  categories: Category[];
};
